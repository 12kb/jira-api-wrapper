"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Component = void 0;
var Component = /** @class */ (function () {
    function Component(context) {
        this.prefix = 'component';
        this.context = context;
    }
    Component.prototype.createComponent = function (params, callback) {
        var endpoint = this.prefix;
        params = params || {};
        var options = {
            uri: this.context.makeUrl(endpoint, 'api'),
            method: 'POST',
            json: true,
            followAllRedirects: true,
            body: {
                name: params.name,
                description: params.description,
                leadUserName: params.leadUserName,
                leadAccountId: params.leadAccountId,
                assigneeType: params.assigneeType,
                project: params.project,
                projectId: params.projectId
            }
        };
        return this.context.sendRequest(options, callback);
    };
    Component.prototype.getComponent = function (params, callback) {
        var endpoint = this.prefix + "/" + params.id;
        var options = {
            uri: this.context.makeUrl(endpoint, 'api'),
            method: 'GET',
            json: true,
            followAllRedirects: true
        };
        return this.context.sendRequest(options, callback);
    };
    Component.prototype.updateComponent = function (params, callback) {
        var endpoint = this.prefix + "/" + params.id;
        var options = {
            uri: this.context.makeUrl(endpoint, 'api'),
            method: 'PUT',
            json: true,
            followAllRedirects: true,
            body: {
                name: params.name,
                description: params.description,
                leadUserName: params.leadUserName,
                leadAccountId: params.leadAccountId,
                assigneeType: params.assigneeType,
                project: params.project,
                projectId: params.projectId
            }
        };
        return this.context.sendRequest(options, callback);
    };
    Component.prototype.deleteComponent = function (params, callback) {
        var endpoint = this.prefix + "/" + params.id;
        var options = {
            uri: this.context.makeUrl(endpoint, 'api'),
            method: 'DELETE',
            json: true,
            followAllRedirects: true,
            qs: {
                moveIssuesTo: params.moveIssuesTo
            }
        };
        return this.context.sendRequest(options, callback);
    };
    Component.prototype.getComponentIssuesCount = function (params, callback) {
        var endpoint = this.prefix + "/" + params.id + "/relatedIssueCounts";
        var options = {
            uri: this.context.makeUrl(endpoint, 'api'),
            method: 'GET',
            json: true,
            followAllRedirects: true
        };
        return this.context.sendRequest(options, callback);
    };
    return Component;
}());
exports.Component = Component;
