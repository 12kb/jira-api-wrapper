import { IAvatar } from "../interfaces/api/iAvatar";
import { IJiraApi } from "../interfaces/iJiraApi";
export declare class Avatar implements IAvatar {
    context: IJiraApi;
    prefix: string;
    constructor(context: IJiraApi);
    getSystemAvatarsByType(params: {
        type: 'issuetype' | 'project' | 'user';
    }, callback?: any): any;
}
