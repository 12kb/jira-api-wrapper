"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Sprint = void 0;
var Sprint = /** @class */ (function () {
    function Sprint(context) {
        this.prefix = 'sprint';
        this.context = context;
    }
    Sprint.prototype.createSprint = function (params, callback) {
        var endpoint = this.prefix;
        params = params || {};
        var options = {
            uri: this.context.makeUrl(endpoint, 'agile'),
            method: 'POST',
            json: true,
            followAllRedirects: true,
            body: {
                name: params.name,
                startDate: params.startDate,
                endDate: params.endDate,
                originBoardId: params.originBoardId,
                goal: params.goal
            }
        };
        return this.context.sendRequest(options, callback);
    };
    Sprint.prototype.getSprint = function (params, callback) {
        var endpoint = this.prefix + "/" + params.sprintId;
        var options = {
            uri: this.context.makeUrl(endpoint, 'agile'),
            method: 'GET',
            json: true,
            followAllRedirects: true
        };
        return this.context.sendRequest(options, callback);
    };
    Sprint.prototype.updateSprint = function (params, callback) {
        var endpoint = this.prefix + "/" + params.sprintId;
        var options = {
            uri: this.context.makeUrl(endpoint, 'agile'),
            method: 'PUT',
            json: true,
            followAllRedirects: true,
            body: {
                id: params.id,
                self: params.self,
                state: params.state,
                name: params.name,
                startDate: params.startDate,
                endDate: params.endDate,
                completeDate: params.completeDate,
                originBoardId: params.originBoardId,
                goal: params.goal
            }
        };
        return this.context.sendRequest(options, callback);
    };
    Sprint.prototype.partiallyUpdateSprint = function (params, callback) {
        var endpoint = this.prefix + "/" + params.sprintId;
        var options = {
            uri: this.context.makeUrl(endpoint, 'agile'),
            method: 'POST',
            json: true,
            followAllRedirects: true,
            body: {
                id: params.id,
                self: params.self,
                state: params.state,
                name: params.name,
                startDate: params.startDate,
                endDate: params.endDate,
                completeDate: params.completeDate,
                originBoardId: params.originBoardId,
                goal: params.goal
            }
        };
        return this.context.sendRequest(options, callback);
    };
    Sprint.prototype.deleteSprint = function (params, callback) {
        var endpoint = this.prefix + "/" + params.sprintId;
        var options = {
            uri: this.context.makeUrl(endpoint, 'agile'),
            method: 'DELETE',
            json: true,
            followAllRedirects: true
        };
        return this.context.sendRequest(options, callback);
    };
    Sprint.prototype.getIssuesForSprint = function (params, callback) {
        var endpoint = this.prefix + "/" + params.sprintId + "/issue";
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
    Sprint.prototype.moveIssuesToSprintAndRank = function (params, callback) {
        var endpoint = this.prefix + "/" + params.sprintId + "/issue";
        var options = {
            uri: this.context.makeUrl(endpoint, 'agile'),
            method: 'POST',
            json: true,
            followAllRedirects: true,
            body: {
                issues: params.issues,
                rankBeforeIssue: params.rankBeforeIssue,
                rankAfterIssue: params.rankAfterIssue,
                rankCustomFieldId: params.rankCustomFieldId
            }
        };
        return this.context.sendRequest(options, callback);
    };
    Sprint.prototype.getPropertiesKeys = function (params, callback) {
        var endpoint = this.prefix + "/" + params.sprintId + "/properties";
        var options = {
            uri: this.context.makeUrl(endpoint, 'agile'),
            method: 'GET',
            json: true,
            followAllRedirects: true
        };
        return this.context.sendRequest(options, callback);
    };
    Sprint.prototype.getProperty = function (params, callback) {
        var endpoint = this.prefix + "/" + params.sprintId + "/properties/" + params.propertyKey;
        var options = {
            uri: this.context.makeUrl(endpoint, 'agile'),
            method: 'GET',
            json: true,
            followAllRedirects: true
        };
        return this.context.sendRequest(options, callback);
    };
    Sprint.prototype.setProperty = function (params, callback) {
        var endpoint = this.prefix + "/" + params.sprintId + "/properties/" + params.propertyKey;
        var options = {
            uri: this.context.makeUrl(endpoint, 'agile'),
            method: 'PUT',
            json: true,
            followAllRedirects: true
        };
        return this.context.sendRequest(options, callback);
    };
    Sprint.prototype.deleteProperty = function (params, callback) {
        var endpoint = this.prefix + "/" + params.sprintId + "/properties/" + params.propertyKey;
        var options = {
            uri: this.context.makeUrl(endpoint, 'agile'),
            method: 'DELETE',
            json: true,
            followAllRedirects: true
        };
        return this.context.sendRequest(options, callback);
    };
    Sprint.prototype.swapSprint = function (params, callback) {
        var endpoint = this.prefix + "/" + params.sprintId + "/swap";
        var options = {
            uri: this.context.makeUrl(endpoint, 'agile'),
            method: 'POST',
            json: true,
            followAllRedirects: true,
            body: {
                sprintToSwapWith: params.sprintToSwapWith
            }
        };
        return this.context.sendRequest(options, callback);
    };
    return Sprint;
}());
exports.Sprint = Sprint;
