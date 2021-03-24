import { IAuditing } from "../interfaces/api/iAuditing";
import { IJiraApi } from "../interfaces/iJiraApi";
export declare class Auditing implements IAuditing {
    context: IJiraApi;
    prefix: string;
    constructor(context: IJiraApi);
    getAuditRecords(params?: {
        offset?: number;
        limit?: number;
        filter?: string;
        from?: string;
        to?: string;
    }, callback?: any): any;
}
