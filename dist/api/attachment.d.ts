import { IAttachment } from "../interfaces/api/iAttachment";
import { IJiraApi } from "../interfaces/iJiraApi";
export declare class Attachment implements IAttachment {
    context: IJiraApi;
    prefix: string;
    constructor(context: IJiraApi);
    getGlobalAttachmentSettings(callback?: any): any;
    getAttachmentMetadata(params: {
        id: number | string;
    }, callback?: any): any;
    deleteAttachment(params: {
        id: number | string;
    }, callback?: any): any;
    getAllMetadata(params: {
        id: number | string;
    }, callback?: any): any;
    getContentsMetadata(params: {
        id: number | string;
    }, callback?: any): any;
}
