# cdk-aws-finops-costreview-access

![License](https://img.shields.io/badge/license-Apache-brightgreen?logo=apache)
![Status](https://img.shields.io/badge/status-active-brightgreen.svg?logo=git)
[![NPM](https://img.shields.io/npm/v/@elastic2ls/finops-access.svg?logo=npm)](https://www.npmjs.com/package/@elastic2ls/finops-access)
[![Node.js](https://img.shields.io/badge/node-%3E%3D20-blue.svg?logo=node.js)](https://nodejs.org/)
[![CI](https://github.com/elastic2ls-com/cdk-aws-finops-costreview-access/actions/workflows/cdk.yml/badge.svg)](https://github.com/elastic2ls-com/cdk-aws-finops-costreview-access/actions)

An AWS CDK construct to provision an IAM user and an IAM role for external FinOps cost reviews, following the principle of least privilege.

It complements the Terraform module [`terraform-aws-finops-costreview-access`](https://github.com/elastic2ls-com/terraform-aws-finops-costreview-access).

---

## Features

- Creates an IAM **user** with assume-role permissions
- Creates an IAM **role** with billing and monitoring policies
- Optionally attaches the **AWSOrganizationsReadOnlyAccess** policy
- Supports customizable **user** and **role names**
- Designed for integration into existing CDK apps and CI/CD pipelines

---

## Install

```bash
npm install @elastic2ls/finops-access
```

---

## Usage

```typescript
import { FinOpsAccess } from '@elastic2ls/finops-access';

new FinOpsAccess(this, 'FinOpsAccess', {
  userName: 'finops-review-user',
  roleName: 'finops-review-role',
  attachOrganizationsPolicy: true,
});
```

---

## Development

```bash
npm run build
npx cdk synth
npm test
```

---

## CI/CD

The provided GitHub Actions workflow runs:
- Build with Node.js 20
- CDK synth
- Jest unit tests

---

## Compatibility

- AWS CDK v2
- Node.js ≥ 20
- AWS CLI configured

---

## License

Apache License 2.0

---

## Related Projects

- [terraform-aws-finops-costreview-access](https://github.com/elastic2ls-com/terraform-aws-finops-costreview-access)

---

## Maintainers

- [elastic2ls](https://github.com/elastic2ls-com)
