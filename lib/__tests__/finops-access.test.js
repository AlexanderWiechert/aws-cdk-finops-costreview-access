"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const aws_cdk_lib_1 = require("aws-cdk-lib");
const finops_stack_1 = require("../lib/finops-stack");
const assertions_1 = require("aws-cdk-lib/assertions");
test('IAM resources created', () => {
    const app = new aws_cdk_lib_1.App();
    const stack = new finops_stack_1.FinOpsStack(app, 'TestStack');
    const template = assertions_1.Template.fromStack(stack);
    template.resourceCountIs('AWS::IAM::User', 1);
    template.resourceCountIs('AWS::IAM::Role', 1);
});
