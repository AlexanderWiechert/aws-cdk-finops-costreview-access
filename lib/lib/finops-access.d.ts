import { Construct } from 'constructs';
export interface FinOpsAccessProps {
    userName: string;
    roleName: string;
    attachOrganizationsPolicy?: boolean;
}
export declare class FinOpsAccess extends Construct {
    constructor(scope: Construct, id: string, props: FinOpsAccessProps);
}
