import { IGroups } from "../interfaces/api/iGroups";
import { IJiraApi } from "../interfaces/iJiraApi";
export declare class Groups implements IGroups {
    context: IJiraApi;
    prefix: string;
    constructor(context: IJiraApi);
    findGroups(params?: {
        accountId?: string;
        query?: string;
        exclude?: string[];
        maxResults?: number;
        userName?: string;
    }, callback?: any): any;
}
