import { IMyself } from "../interfaces/api/iMyself";
import { IJiraApi } from "../interfaces/iJiraApi";
export declare class Myself implements IMyself {
    context: IJiraApi;
    prefix: string;
    constructor(context: IJiraApi);
    getCurrentUser(params?: {
        expand?: string;
    }, callback?: any): any;
}
