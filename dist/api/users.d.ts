import { IUsers } from "../interfaces/api/iUsers";
import { IJiraApi } from "../interfaces/iJiraApi";
export declare class Users implements IUsers {
    context: IJiraApi;
    prefix: string;
    constructor(context: IJiraApi);
    findUsers(params?: {
        accountId?: string;
        query?: string;
        username?: string;
        startAt?: number;
        maxResults?: number;
        property?: string;
        userName?: string;
    }, callback?: any): any;
}
