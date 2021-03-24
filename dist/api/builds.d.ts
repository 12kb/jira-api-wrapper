import { IBuilds } from "../interfaces/api/iBuilds";
import { IJiraApi } from "../interfaces/iJiraApi";
export declare class Builds implements IBuilds {
    context: IJiraApi;
    constructor(context: IJiraApi);
    submitBuildData(params: {
        Authorization: string;
        properties?: any;
        builds: any[];
    }, callback?: any): any;
    deleteBuildsByProperty(params: {
        Authorization: string;
        _updateSequenceNumber?: number;
    }, callback?: any): any;
    getBuildByKey(params: {
        Authorization: string;
        pipelineId: string;
        buildNumber: number;
    }, callback?: any): any;
    deleteBuildByKey(params: {
        Authorization: string;
        pipelineId: string;
        buildNumber: number;
        '_updateSequenceNumber'?: number;
    }, callback?: any): any;
}
