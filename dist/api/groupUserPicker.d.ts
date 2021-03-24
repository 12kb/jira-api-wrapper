import { IGroupUserPicker } from "../interfaces/api/iGroupUserPicker";
import { IJiraApi } from "../interfaces/iJiraApi";
export declare class GroupUserPicker implements IGroupUserPicker {
    context: IJiraApi;
    prefix: string;
    constructor(context: IJiraApi);
    findUsersAndGroups(params?: {
        query?: string;
        maxResults?: number;
        showAvatar?: boolean;
        fieldId?: string;
        projectId?: string[];
        issueTypeId?: string[];
        avatarSize?: string;
        caseInsensitive?: boolean;
        excludeConnectAddons?: boolean;
    }, callback?: any): any;
}
