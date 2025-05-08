import { Stack, StackProps } from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { FinOpsAccess } from './finops-access';

export class FinOpsStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    new FinOpsAccess(this, 'FinOpsAccess', {
      userName: 'finops-review-user',
      roleName: 'finops-review-role',
      attachOrganizationsPolicy: true,
    });
  }
}
