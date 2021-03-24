import { IJiraApi } from "../iJiraApi";
export interface IMyself {
    context: IJiraApi;
    prefix: string;
    getCurrentUser(params?: {
        expand?: string;
    }, callback?: any | undefined): any;
}
