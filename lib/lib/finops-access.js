"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FinOpsAccess = void 0;
const constructs_1 = require("constructs");
const aws_cdk_lib_1 = require("aws-cdk-lib");
class FinOpsAccess extends constructs_1.Construct {
    constructor(scope, id, props) {
        super(scope, id);
        const user = new aws_cdk_lib_1.aws_iam.User(this, 'FinOpsUser', {
            userName: props.userName,
        });
        const role = new aws_cdk_lib_1.aws_iam.Role(this, 'FinOpsRole', {
            roleName: props.roleName,
            assumedBy: new aws_cdk_lib_1.aws_iam.ArnPrincipal(`arn:aws:iam::\${scope.node.tryGetContext('account') || '123456789012'}:user/\${props.userName}`),
        });
        user.addToPolicy(new aws_cdk_lib_1.aws_iam.PolicyStatement({
            actions: ['sts:AssumeRole'],
            resources: [role.roleArn],
        }));
        role.addManagedPolicy(aws_cdk_lib_1.aws_iam.ManagedPolicy.fromAwsManagedPolicyName('Billing'));
        role.addManagedPolicy(aws_cdk_lib_1.aws_iam.ManagedPolicy.fromAwsManagedPolicyName('CloudWatchReadOnlyAccess'));
        if (props.attachOrganizationsPolicy) {
            role.addManagedPolicy(aws_cdk_lib_1.aws_iam.ManagedPolicy.fromAwsManagedPolicyName('AWSOrganizationsReadOnlyAccess'));
        }
    }
}
exports.FinOpsAccess = FinOpsAccess;
