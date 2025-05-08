import { App } from 'aws-cdk-lib';
import { FinOpsStack } from '../lib/finops-stack';

const app = new App();
new FinOpsStack(app, 'FinOpsStack');

