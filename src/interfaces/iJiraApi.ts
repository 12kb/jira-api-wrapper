import { IBacklog } from 'interfaces/api/iBacklog';
import { IBoard } from 'interfaces/api/iBoard';
import { IBuilds } from 'interfaces/api/iBuilds';
import { IDeployments } from 'interfaces/api/iDeployments';
import { IDevelopmentInformation } from 'interfaces/api/iDevelopmentInformation';
import { IEpic } from 'interfaces/api/iEpic';
import { IFeatureFlags } from 'interfaces/api/iFeatureFlags';
import { IIssue } from 'interfaces/api/iIssue';
import { IMyself } from 'interfaces/api/iMyself';
import { ISearch } from 'interfaces/api/ISearch';
import { ISprint } from 'interfaces/api/iSprint';

export interface IJiraApi {
  host: string;
  port: number;

  protocol: string;
  pathPrefix: string;

  apiVersion: number | string;
  agileApiVersion: number | string;
  authApiVersion: number | string;
  webhookApiVersion: number | string;

  devInfoApiVersion: number | string;
  featureFlagsApiVersion: number | string;
  deploymentApiVersion: number | string;
  buildsApiVersion: number | string;

  oauth?: {
    consumerKey: string;
    privateKey: string;
    token: string;
    tokenSecret: string;
    signatureMethod: string;
  } | undefined;

  basicAuth?: {
    base64?: string;
    username?: string;
    password?: string;
  } | undefined;

  cookieJar?: any;
  rejectUnauthorized: any;

  backlog: IBacklog;
  board: IBoard;
  epic: IEpic;
  issue: IIssue;
  myself: IMyself;
  search: ISearch;
  sprint: ISprint;

  builds: IBuilds;
  deployments: IDeployments;
  developmentInformation: IDevelopmentInformation;
  featureFlags: IFeatureFlags;

  buildUrl(path: string, apiType:
    'agile'
    | 'api'
    | 'auth'
    | 'webhook'
    | 'devInfo'
    | 'featureFlags'
    | 'deployment'
    | 'builds'
  ): any;
  sendRequest(options: any, callback: any, successString?: string): any;
}
