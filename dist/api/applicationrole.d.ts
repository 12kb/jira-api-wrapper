import { IApplicationrole } from "../interfaces/api/iApplicationrole";
import { IJiraApi } from "../interfaces/iJiraApi";
export declare class Applicationrole implements IApplicationrole {
    context: IJiraApi;
    prefix: string;
    constructor(context: IJiraApi);
    getAllApplicationRoles(callback?: any): any;
    getApplicationRole(params: {
        key: string;
    }, callback?: any): any;
}
