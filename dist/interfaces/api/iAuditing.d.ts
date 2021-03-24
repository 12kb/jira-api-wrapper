import { IJiraApi } from "../iJiraApi";
export interface IAuditing {
    context: IJiraApi;
    prefix: string;
    getAuditRecords(params?: {
        offset?: number;
        limit?: number;
        filter?: string;
        from?: string;
        to?: string;
    }, callback?: any): any;
}
