import { IApplicationProperties } from "../interfaces/api/iApplicationProperties";
import { IJiraApi } from "../interfaces/iJiraApi";
export declare class ApplicationProperties implements IApplicationProperties {
    context: IJiraApi;
    prefix: string;
    constructor(context: IJiraApi);
    getApplicationProperty(params?: {
        key?: string;
        permissionLevel?: string;
        keyFilter?: string;
    }, callback?: any): any;
    getAdvancedSettings(callback?: any): any;
    setApplicationProperty(params: {
        idPath: number | string;
        id?: number | string;
        value?: string;
    }, callback?: any): any;
}
