import { IFeatureFlags } from "../interfaces/api/iFeatureFlags";
import { IJiraApi } from "../interfaces/iJiraApi";
export declare class FeatureFlags implements IFeatureFlags {
    context: IJiraApi;
    constructor(context: IJiraApi);
    submitFeatureFlagData(params: {
        Authorization: string;
        properties?: any;
        flags: any[];
    }, callback?: any): any;
    deleteFeatureFlagsByProperty(params: {
        Authorization: string;
        _updateSequenceId?: number;
    }, callback?: any): any;
    getFeatureFlagById(params: {
        Authorization: string;
        featureFlagId: string;
    }, callback?: any): any;
    deleteFeatureFlagById(params: {
        Authorization: string;
        featureFlagId: string;
        _updateSequenceId?: number;
    }, callback?: any): any;
}
