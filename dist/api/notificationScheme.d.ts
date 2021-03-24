import { INotificationScheme } from "../interfaces/api/iNotificationScheme";
import { IJiraApi } from "../interfaces/iJiraApi";
export declare class NotificationScheme implements INotificationScheme {
    private context;
    private prefix;
    constructor(context: IJiraApi);
    getNotificationSchemesPaginated(params?: {
        startAt?: number;
        maxResults?: number;
        expand?: string;
    }, callback?: any): any;
    getNotificationScheme(params: {
        id: number;
        expand?: string;
    }, callback?: any): any;
}
