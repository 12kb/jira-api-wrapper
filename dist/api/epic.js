"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Epic = void 0;
var Epic = /** @class */ (function () {
    function Epic(context) {
        this.prefix = 'epic';
        this.context = context;
    }
    Epic.prototype.getIssuesWithoutEpic = function (params, callback) {
        var endpoint = this.prefix + "/none/issue";
        params = params || {};
        var options = {
            uri: this.context.makeUrl(endpoint, 'agile'),
            method: 'GET',
            json: true,
            followAllRedirects: true,
            qs: {
                startAt: params.startAt,
                maxResults: params.maxResults,
                jql: params.jql,
                validateQuery: params.validateQuery,
                fields: params.fields ? params.fields.join(',') : undefined,
                expand: params.expand
            }
        };
        return this.context.sendRequest(options, callback);
    };
    Epic.prototype.removeIssuesFromEpic = function (params, callback) {
        var endpoint = this.prefix + "/none/issue";
        params = params || {};
        var options = {
            uri: this.context.makeUrl(endpoint, 'agile'),
            method: 'POST',
            json: true,
            followAllRedirects: true,
            body: {
                issues: params.issues
            }
        };
        return this.context.sendRequest(options, callback);
    };
    Epic.prototype.getEpic = function (params, callback) {
        var endpoint = this.prefix + "/" + params.epicIdOrKey;
        var options = {
            uri: this.context.makeUrl(endpoint, 'agile'),
            method: 'GET',
            json: true,
            followAllRedirects: true
        };
        return this.context.sendRequest(options, callback);
    };
    Epic.prototype.partiallyUpdateEpic = function (params, callback) {
        var endpoint = this.prefix + "/" + params.epicIdOrKey;
        var options = {
            uri: this.context.makeUrl(endpoint, 'agile'),
            method: 'POST',
            json: true,
            followAllRedirects: true,
            body: {
                name: params.name,
                summary: params.summary,
                color: params.color,
                done: params.color
            }
        };
        return this.context.sendRequest(options, callback);
    };
    Epic.prototype.getIssuesForEpic = function (params, callback) {
        var endpoint = this.prefix + "/" + params.epicIdOrKey + "/issue";
        var options = {
            uri: this.context.makeUrl(endpoint, 'agile'),
            method: 'GET',
            json: true,
            followAllRedirects: true,
            qs: {
                startAt: params.startAt,
                maxResults: params.maxResults,
                jql: params.jql,
                validateQuery: params.validateQuery,
                fields: params.fields ? params.fields.join(',') : undefined,
                expand: params.expand
            }
        };
        return this.context.sendRequest(options, callback);
    };
    Epic.prototype.moveIssuesToEpic = function (params, callback) {
        var endpoint = this.prefix + "/" + params.epicIdOrKey + "/issue";
        var options = {
            uri: this.context.makeUrl(endpoint, 'agile'),
            method: 'POST',
            json: true,
            followAllRedirects: true,
            body: {
                issues: params.issues
            }
        };
        return this.context.sendRequest(options, callback);
    };
    Epic.prototype.rankEpics = function (params, callback) {
        var endpoint = this.prefix + "/" + params.epicIdOrKey + "/rank";
        var options = {
            uri: this.context.makeUrl(endpoint, 'agile'),
            method: 'PUT',
            json: true,
            followAllRedirects: true,
            body: {
                rankBeforeEpic: params.rankBeforeEpic,
                rankAfterEpic: params.rankAfterEpic,
                rankCustomFieldId: params.rankCustomFieldId
            }
        };
        return this.context.sendRequest(options, callback);
    };
    return Epic;
}());
exports.Epic = Epic;
