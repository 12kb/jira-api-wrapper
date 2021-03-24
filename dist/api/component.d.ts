import { IComponent } from "../interfaces/api/iComponent";
import { IJiraApi } from "../interfaces/iJiraApi";
export declare class Component implements IComponent {
    context: IJiraApi;
    prefix: string;
    constructor(context: IJiraApi);
    createComponent(params?: {
        name?: string;
        description?: string;
        leadUserName?: string;
        leadAccountId?: string;
        assigneeType?: string;
        project?: string;
        projectId?: number | string;
    }, callback?: any): any;
    getComponent(params: {
        id: string | number;
    }, callback?: any): any;
    updateComponent(params: {
        id: string | number;
        name?: string;
        description?: string;
        leadUserName?: string;
        leadAccountId?: string;
        assigneeType?: string;
        project?: string;
        projectId?: string | number;
    }, callback?: any): any;
    deleteComponent(params: {
        id: string | number;
        moveIssuesTo?: string;
    }, callback?: any): any;
    getComponentIssuesCount(params: {
        id: number | string;
    }, callback?: any): any;
}
