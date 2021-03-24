import { ICustomFieldOption } from "../interfaces/api/iCustomFieldOption";
import { IJiraApi } from "../interfaces/iJiraApi";
export declare class CustomFieldOption implements ICustomFieldOption {
    context: IJiraApi;
    prefix: string;
    constructor(context: IJiraApi);
    getCustomFieldOption(params: {
        id: number | string;
    }, callback?: any): any;
}
