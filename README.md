# CDK FinOps Access Construct

This CDK construct creates an IAM user and an IAM role for FinOps cost reviews with least-privilege access.

## Usage

1. Install

npm install @elastic2ls/finops-access

2. Import and use in your CDK stack

import { FinOpsAccess } from '@elastic2ls/finops-access';

new FinOpsAccess(this, 'FinOpsAccess', {
  userName: 'finops-review-user',
  roleName: 'finops-review-role',
  attachOrganizationsPolicy: true,
});

3. Build, synth, and test

npm run build
npx cdk synth
npm test

## CI/CD

The GitHub Actions workflow runs:
- Build with Node.js 20
- CDK synth
- Jest-based unit tests

## Compatibility

- AWS CDK v2
- Node.js 20
- AWS CLI configured
