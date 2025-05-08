"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FinOpsStack = void 0;
const aws_cdk_lib_1 = require("aws-cdk-lib");
const finops_access_1 = require("./finops-access");
class FinOpsStack extends aws_cdk_lib_1.Stack {
    constructor(scope, id, props) {
        super(scope, id, props);
        new finops_access_1.FinOpsAccess(this, 'FinOpsAccess', {
            userName: 'finops-review-user',
            roleName: 'finops-review-role',
            attachOrganizationsPolicy: true,
        });
    }
}
exports.FinOpsStack = FinOpsStack;
