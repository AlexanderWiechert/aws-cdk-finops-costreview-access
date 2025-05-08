# aws-cdk-finops-costreview-access

![License](https://img.shields.io/badge/license-MIT-brightgreen?logo=mit)  
![Status](https://img.shields.io/badge/status-active-brightgreen.svg?logo=git)  
[![Sponsor](https://img.shields.io/badge/sponsors-AlexanderWiechert-blue.svg?logo=github-sponsors)](https://github.com/sponsors/AlexanderWiechert/)  
[![Website](https://img.shields.io/badge/visit-elastic2ls.com-blue.svg?logo=github)](https://www.elastic2ls.com/)

## 📦 Overview

`aws-cdk-finops-costreview-access` is an AWS CDK construct library to provision IAM resources for FinOps cloud cost reviews.

## 🚀 Features

- Create IAM user or IAM role with optional external account trust
- Attach AWS managed policies for Billing, CloudWatch, Organizations
- Supports naming overrides
- Works with CDK v2 (`aws-cdk-lib`)
- CI/CD ready

## 📖 Usage

### Install

```bash
npm install aws-cdk-lib constructs
```

### Example CDK Stack

```ts
import { App } from 'aws-cdk-lib';
import { FinOpsStack } from '../lib/finops-stack';

const app = new App();
new FinOpsStack(app, 'FinOpsStack');
```

### Example Construct

```ts
import { Stack, StackProps } from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { FinOpsAccess } from './finops-access';

export class FinOpsStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    new FinOpsAccess(this, 'FinOpsAccess', {
      mode: 'iam-user',
      userName: 'finops-review-user',
      roleName: 'finops-review-role',
      attachOrganizationsPolicy: true,
      serviceProviderAccountId: '123456789012',
    });
  }
}
```

## 🏗 Setup

```bash
npm install
npm run build
npx cdk synth
npm test
```

## ✅ GitHub Actions

- Node.js setup (.nvmrc)
- Dependency install
- Build
- CDK synth
- Jest tests

## 📂 Project Structure

```
.
├── bin/app.ts
├── lib/finops-stack.ts
├── .github/workflows/cdk.yml
├── package.json
├── tsconfig.json
├── jest.config.js
├── .nvmrc
├── .gitignore
├── cdk.json
```

## 💬 Contributing

1. Fork the repo
2. Create a feature branch
3. Commit changes
4. Push & create PR

## 📄 License

MIT — see [LICENSE](LICENSE)
