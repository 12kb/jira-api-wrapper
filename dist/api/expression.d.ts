import { IExpression } from "../interfaces/api/iExpression";
import { IJiraApi } from "../interfaces/iJiraApi";
export declare class Expression implements IExpression {
    context: IJiraApi;
    prefix: string;
    constructor(context: IJiraApi);
    evaluateJiraExpression(params?: {
        expand?: string;
        expression?: string;
        context?: any;
    }, callback?: any): any;
}
