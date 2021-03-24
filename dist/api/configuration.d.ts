import { IConfiguration } from "../interfaces/api/iConfiguration";
import { IJiraApi } from "../interfaces/iJiraApi";
export declare class Configuration implements IConfiguration {
    context: IJiraApi;
    prefix: string;
    constructor(context: IJiraApi);
    getGlobalSettings(callback?: any): any;
    getSelectedTimeTrackingProvider(callback?: any): any;
    selectTimeTrackingProvider(params: {
        key: string;
        name?: string;
    }, callback?: any): any;
    disableTimeTracking(callback?: any): any;
    getAllTimeTrackingProviders(callback?: any): any;
    getTimeTrackingSettings(callback?: any): any;
    setTimeTrackingSettings(params: {
        workingHoursPerDay: number;
        workingDaysPerWeek: number;
        timeFormat: 'pretty' | 'days' | 'hours' | string;
        defaultUnit: 'minute' | 'hour' | 'day' | 'week' | string;
    }, callback?: any): any;
}
