import { IBacklog } from "../interfaces/api/iBacklog";
import { IJiraApi } from "../interfaces/iJiraApi";
export declare class Backlog implements IBacklog {
    context: IJiraApi;
    prefix: string;
    constructor(context: IJiraApi);
    moveIssuesToBacklog(params?: {
        issues?: string[];
    }, callback?: any): any;
    moveIssuesToBacklogForBoard(params: {
        boardId: number;
        issues?: string[];
        rankBeforeIssue?: string;
        rankAfterIssue?: string;
        rankCustomFieldId?: number;
    }, callback?: any): any;
}
