import { IWorklog } from "../interfaces/api/iWorklog";
import { IJiraApi } from "../interfaces/iJiraApi";
export declare class Worklog implements IWorklog {
    context: IJiraApi;
    prefix: string;
    constructor(context: IJiraApi);
    getIDsOfDeletedWorklogs(params?: {
        since?: number;
    }, callback?: any): any;
    getWorklogs(params: {
        expand?: string;
        ids: number[];
    }, callback?: any): any;
    getIDsOfUpdatedWorklogs(params?: {
        since?: number;
        expand?: string;
    }, callback?: any): any;
}
