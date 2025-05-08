import { App } from 'aws-cdk-lib';
import { MyStack } from '../lib/my-stack';
import { Template } from 'aws-cdk-lib/assertions';

test('IAM resources created', () => {
  const app = new App();
  const stack = new MyStack(app, 'TestStack');
  const template = Template.fromStack(stack);

  template.resourceCountIs('AWS::IAM::User', 1);
  template.resourceCountIs('AWS::IAM::Role', 1);
});
