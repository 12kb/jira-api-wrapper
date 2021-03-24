"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var request_1 = __importDefault(require("request"));
var url = __importStar(require("url"));
var errors = __importStar(require("./utils/errors"));
var oauth = __importStar(require("./utils/oauth"));
var applicationProperties_1 = require("./api/applicationProperties");
var applicationrole_1 = require("./api/applicationrole");
var attachment_1 = require("./api/attachment");
var auditing_1 = require("./api/auditing");
var avatar_1 = require("./api/avatar");
var backlog_1 = require("./api/backlog");
var board_1 = require("./api/board");
var comment_1 = require("./api/comment");
var component_1 = require("./api/component");
var configuration_1 = require("./api/configuration");
var customFieldOption_1 = require("./api/customFieldOption");
var dashboard_1 = require("./api/dashboard");
var epic_1 = require("./api/epic");
var expression_1 = require("./api/expression");
var field_1 = require("./api/field");
var filter_1 = require("./api/filter");
var group_1 = require("./api/group");
var groups_1 = require("./api/groups");
var groupUserPicker_1 = require("./api/groupUserPicker");
var issue_1 = require("./api/issue");
var jql_1 = require("./api/jql");
var myself_1 = require("./api/myself");
var notificationScheme_1 = require("./api/notificationScheme");
var search_1 = require("./api/search");
var session_1 = require("./api/session");
var sprint_1 = require("./api/sprint");
var users_1 = require("./api/users");
var worklog_1 = require("./api/worklog");
var builds_1 = require("./api/builds");
var deployments_1 = require("./api/deployments");
var developmentInformation_1 = require("./api/developmentInformation");
var featureFlags_1 = require("./api/featureFlags");
var JiraApi = /** @class */ (function () {
    function JiraApi(config) {
        this.host = config.host;
        this.port = config.port || 443;
        this.protocol = config.protocol || 'https';
        this.pathPrefix = config.pathPrefix || '/';
        this.apiVersion = 3;
        this.agileApiVersion = '1.0';
        this.authApiVersion = 1;
        this.webhookApiVersion = '1.0';
        this.devInfoApiVersion = '0.10';
        this.featureFlagsApiVersion = '0.1';
        this.deploymentApiVersion = '0.1';
        this.buildsApiVersion = '0.1';
        if (config.oauth) {
            this.oauth = __assign({ signatureMethod: 'RSA-SHA1', token: config.oauth.token, tokenSecret: config.oauth.tokenSecret }, config.oauth);
        }
        else if (config.basicAuth) {
            this.basicAuth = __assign({}, config.basicAuth);
        }
        if (config.cookieJar) {
            this.cookieJar = config.cookieJar;
        }
        this.rejectUnauthorized = config.rejectUnauthorized;
        this.ca = config.ca;
        this.cert = config.cert;
        this.key = config.key;
        this.strictSSL = config.strictSSL || true;
        this.applicationProperties = new applicationProperties_1.ApplicationProperties(this);
        this.applicationrole = new applicationrole_1.Applicationrole(this);
        this.attachment = new attachment_1.Attachment(this);
        this.auditing = new auditing_1.Auditing(this);
        this.avatar = new avatar_1.Avatar(this);
        this.backlog = new backlog_1.Backlog(this);
        this.board = new board_1.Board(this);
        this.comment = new comment_1.Comment(this);
        this.component = new component_1.Component(this);
        this.configuration = new configuration_1.Configuration(this);
        this.customFieldOption = new customFieldOption_1.CustomFieldOption(this);
        this.dashboard = new dashboard_1.Dashboard(this);
        this.expression = new expression_1.Expression(this);
        this.epic = new epic_1.Epic(this);
        this.field = new field_1.Field(this);
        this.filter = new filter_1.Filter(this);
        this.group = new group_1.Group(this);
        this.groups = new groups_1.Groups(this);
        this.groupUserPicker = new groupUserPicker_1.GroupUserPicker(this);
        this.users = new users_1.Users(this);
        this.issue = new issue_1.Issue(this);
        this.jql = new jql_1.Jql(this);
        this.myself = new myself_1.Myself(this);
        this.notificationScheme = new notificationScheme_1.NotificationScheme(this);
        this.search = new search_1.Search(this);
        this.sprint = new sprint_1.Sprint(this);
        this.worklog = new worklog_1.Worklog(this);
        this.session = new session_1.Session(this);
        this.builds = new builds_1.Builds(this);
        this.deployments = new deployments_1.Deployments(this);
        this.developmentInformation = new developmentInformation_1.DevelopmentInformation(this);
        this.featureFlags = new featureFlags_1.FeatureFlags(this);
        JiraApi.validateConfig(config);
    }
    JiraApi.prototype.makeUrl = function (path, apiType, apiVersion) {
        apiType = apiType || 'api';
        var localApiVersion;
        switch (apiType) {
            case 'agile':
                localApiVersion = this.agileApiVersion;
                break;
            case 'api':
                localApiVersion = this.apiVersion;
                break;
            case 'auth':
                localApiVersion = this.authApiVersion;
                break;
            case 'webhook':
                localApiVersion = this.webhookApiVersion;
                break;
            case 'devInfo':
                localApiVersion = this.devInfoApiVersion;
                break;
            case 'featureFlags':
                localApiVersion = this.featureFlagsApiVersion;
                break;
            case 'deployment':
                localApiVersion = this.deploymentApiVersion;
                break;
            case 'builds':
                localApiVersion = this.buildsApiVersion;
                break;
            default:
                localApiVersion = this.apiVersion;
                break;
        }
        localApiVersion = apiVersion || localApiVersion;
        var requestUrl = url.format({
            hostname: this.host,
            protocol: this.protocol,
            port: this.port,
            pathname: this.pathPrefix + "rest/" + apiType + "/" + localApiVersion + "/" + path
        });
        return decodeURIComponent(requestUrl);
    };
    JiraApi.prototype.sendRequest = function (options, callback, successString) {
        options.rejectUnauthorized = this.rejectUnauthorized;
        options.ca = this.ca;
        options.cert = this.cert;
        options.key = this.key;
        options.strictSSL = this.strictSSL;
        if (this.oauth) {
            options.oauth = this.oauth;
        }
        else if (this.basicAuth) {
            if (this.basicAuth.base64) {
                if (!options.headers) {
                    options.headers = {};
                }
                options.headers.Authorization = "Basic " + this.basicAuth.base64;
            }
            else {
                options.auth = this.basicAuth;
            }
        }
        if (this.cookieJar) {
            options.jar = this.cookieJar;
        }
        if (callback) {
            request_1.default(options, function (error, response, body) {
                if (error || (response.statusCode.toString()[0] !== '2' && response.statusCode.toString()[0] !== '3')) {
                    return callback(error ? error : body, null, response);
                }
                if (typeof body === 'string') {
                    try {
                        body = JSON.parse(body);
                    }
                    catch (e) {
                        return callback(e, null, response);
                    }
                }
                return callback(null, successString ? successString : body, response);
            });
        }
        else {
            return new Promise(function (resolve, reject) {
                var req = request_1.default(options);
                var requestObj = null;
                req.on('request', function (reqs) {
                    requestObj = reqs;
                });
                req.on('response', function (response) {
                    var error = response.statusCode.toString()[0] !== '2';
                    var body = [];
                    var push = body.push.bind(body);
                    response.on('data', push);
                    response.on('end', function () {
                        var result = body.join('');
                        if (result[0] === '[' || result[0] === '{') {
                            try {
                                result = JSON.parse(result);
                            }
                            catch (e) {
                                // nothing to do
                            }
                        }
                        if (error) {
                            response.body = result;
                            if (options.debug) {
                                reject({
                                    result: JSON.stringify(response),
                                    debug: {
                                        options: options,
                                        request: {
                                            headers: requestObj._headers,
                                        },
                                        response: {
                                            headers: response.headers,
                                        },
                                    }
                                });
                            }
                            else {
                                reject(JSON.stringify(response));
                            }
                            return;
                        }
                        if (options.debug) {
                            resolve({
                                result: result,
                                debug: {
                                    options: options,
                                    request: {
                                        headers: requestObj._headers,
                                    },
                                    response: {
                                        headers: response.headers,
                                    },
                                }
                            });
                        }
                        else {
                            resolve(result);
                        }
                    });
                });
                req.on('error', reject);
            });
        }
    };
    JiraApi.getAuthorizeURL = function (config, callback) {
        oauth.getAuthorizeURL(config, callback);
    };
    JiraApi.swapRequestTokenWithAccessToken = function (config, callback) {
        oauth.swapRequestTokenWithAccessToken(config, callback);
    };
    JiraApi.validateConfig = function (config) {
        if (!config.host) {
            throw new Error(errors.NO_HOST_ERROR);
        }
        if (config.oauth) {
            if (!config.oauth.consumerKey) {
                throw new Error(errors.NO_CONSUMER_KEY_ERROR);
            }
            if (!config.oauth.privateKey) {
                throw new Error(errors.NO_PRIVATE_KEY_ERROR);
            }
            if (!config.oauth.token) {
                throw new Error(errors.NO_TOKEN);
            }
            if (!config.oauth.tokenSecret) {
                throw new Error(errors.NO_TOKEN_SECRET);
            }
        }
        else if (config.basicAuth && !config.basicAuth.base64) {
            if (!config.basicAuth.username) {
                throw new Error(errors.NO_USERNAME);
            }
            if (!config.basicAuth.password) {
                throw new Error(errors.NO_PASSWORD);
            }
        }
    };
    return JiraApi;
}());
exports.default = JiraApi;
module.exports = JiraApi;
