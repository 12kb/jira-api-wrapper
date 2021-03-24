import { IComment } from "../interfaces/api/iComment";
import { IJiraApi } from "../interfaces/iJiraApi";
export declare class Comment implements IComment {
    context: IJiraApi;
    prefix: string;
    constructor(context: IJiraApi);
    getCommentsByIDs(params?: {
        expand?: string;
        ids?: number[] | string[];
    }, callback?: any): any;
    getCommentPropertyKeys(params: {
        commentId: string | number;
    }, callback?: any): any;
    getCommentProperty(params: {
        commentId: string | number;
        propertyKey: string | number;
    }, callback?: any): any;
    setCommentProperty(params: {
        commentId: string | number;
        propertyKey: string | number;
        body?: any;
    }, callback?: any): any;
    deleteCommentProperty(params: {
        commentId: string | number;
        propertyKey: string | number;
    }, callback?: any): any;
}
