import { App } from 'aws-cdk-lib';
import { FinOpsStack } from '../lib/finops-stack';
import { Template } from 'aws-cdk-lib/assertions';

test('IAM resources created', () => {
  const app = new App();
  const stack = new FinOpsStack(app, 'TestStack');
  const template = Template.fromStack(stack);

  template.resourceCountIs('AWS::IAM::User', 1);
  template.resourceCountIs('AWS::IAM::Role', 1);
});
