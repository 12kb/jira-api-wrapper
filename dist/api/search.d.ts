import { ISearch } from "../interfaces/api/iSearch";
import { IJiraApi } from "../interfaces/iJiraApi";
export declare class Search implements ISearch {
    context: IJiraApi;
    prefix: string;
    constructor(context: IJiraApi);
    search(params?: {
        method?: string;
        timeout?: number;
        jql?: string;
        startAt?: number;
        maxResults?: number;
        validateQuery?: string;
        fields?: string[];
        expand?: string | string[];
        properties?: string[];
        fieldsByKeys?: boolean;
    }, callback?: any): any;
}
