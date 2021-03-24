import { IJql } from "../interfaces/api/IJql";
import { IJiraApi } from "../interfaces/iJiraApi";
export declare class Jql implements IJql {
    context: IJiraApi;
    prefix: string;
    constructor(context: IJiraApi);
    getFieldReferenceData(callback?: any): any;
    getFieldAutoCompleteSuggestions(params?: {
        fieldName?: string;
        fieldValue?: string;
        predicateName?: string;
        predicateValue?: string;
    }, callback?: any): any;
    convertUserIdentifiers(params?: {
        queryStrings?: string[];
    }, callback?: any): any;
}
