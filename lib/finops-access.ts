import { Construct } from 'constructs';
import { aws_iam as iam } from 'aws-cdk-lib';

export interface FinOpsAccessProps {
  userName: string;
  roleName: string;
  attachOrganizationsPolicy?: boolean;
}

export class FinOpsAccess extends Construct {
  constructor(scope: Construct, id: string, props: FinOpsAccessProps) {
    super(scope, id);

    const user = new iam.User(this, 'FinOpsUser', {
      userName: props.userName,
    });

    const role = new iam.Role(this, 'FinOpsRole', {
      roleName: props.roleName,
      assumedBy: new iam.ArnPrincipal(`arn:aws:iam::\${scope.node.tryGetContext('account') || '123456789012'}:user/\${props.userName}`),
    });

    user.addToPolicy(new iam.PolicyStatement({
      actions: ['sts:AssumeRole'],
      resources: [role.roleArn],
    }));

    role.addManagedPolicy(iam.ManagedPolicy.fromAwsManagedPolicyName('Billing'));
    role.addManagedPolicy(iam.ManagedPolicy.fromAwsManagedPolicyName('CloudWatchReadOnlyAccess'));

    if (props.attachOrganizationsPolicy) {
      role.addManagedPolicy(iam.ManagedPolicy.fromAwsManagedPolicyName('AWSOrganizationsReadOnlyAccess'));
    }
  }
}
