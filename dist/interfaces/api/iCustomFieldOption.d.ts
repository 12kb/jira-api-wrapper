import { IJiraApi } from "../iJiraApi";
export interface ICustomFieldOption {
    context: IJiraApi;
    prefix: string;
    getCustomFieldOption(params: {
        id: number | string;
    }, callback?: any): any;
}
