"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Field = void 0;
var Field = /** @class */ (function () {
    function Field(context) {
        this.prefix = 'field';
        this.context = context;
    }
    Field.prototype.getFields = function (callback) {
        var endpoint = this.prefix;
        var options = {
            uri: this.context.makeUrl(endpoint, 'api'),
            method: 'GET',
            json: true,
            followAllRedirects: true
        };
        return this.context.sendRequest(options, callback);
    };
    Field.prototype.createCustomField = function (params, callback) {
        var endpoint = this.prefix;
        var options = {
            uri: this.context.makeUrl(endpoint, 'api'),
            method: 'POST',
            json: true,
            followAllRedirects: true,
            body: {
                name: params.name,
                description: params.description,
                type: params.type,
                searcherKey: params.searcherKey
            }
        };
        return this.context.sendRequest(options, callback);
    };
    Field.prototype.getAllIssueFieldOptions = function (params, callback) {
        var endpoint = this.prefix + "/" + params.fieldKey + "/option";
        var options = {
            uri: this.context.makeUrl(endpoint, 'api'),
            method: 'GET',
            json: true,
            followAllRedirects: true,
            qs: {
                startAt: params.startAt,
                maxResults: params.maxResults
            }
        };
        return this.context.sendRequest(options, callback);
    };
    Field.prototype.createIssueFieldOption = function (params, callback) {
        var endpoint = this.prefix + "/" + params.fieldKey + "/option";
        var options = {
            uri: this.context.makeUrl(endpoint, 'api'),
            method: 'POST',
            json: true,
            followAllRedirects: true,
            body: {
                value: params.value,
                properties: params.properties,
                config: params.config
            }
        };
        return this.context.sendRequest(options, callback);
    };
    Field.prototype.getSelectableIssueFieldOptions = function (params, callback) {
        var endpoint = this.prefix + "/" + params.fieldKey + "/option/suggestions/edit";
        var options = {
            uri: this.context.makeUrl(endpoint, 'api'),
            method: 'GET',
            json: true,
            followAllRedirects: true,
            qs: {
                startAt: params.startAt,
                maxResults: params.maxResults,
                projectId: params.projectId
            }
        };
        return this.context.sendRequest(options, callback);
    };
    Field.prototype.getVisibleIssueFieldOptions = function (params, callback) {
        var endpoint = this.prefix + "/" + params.fieldKey + "/option/suggestions/search";
        var options = {
            uri: this.context.makeUrl(endpoint, 'api'),
            method: 'GET',
            json: true,
            followAllRedirects: true,
            qs: {
                startAt: params.startAt,
                maxResults: params.maxResults,
                projectId: params.projectId
            }
        };
        return this.context.sendRequest(options, callback);
    };
    Field.prototype.getIssueFieldOption = function (params, callback) {
        var endpoint = this.prefix + "/" + params.fieldKey + "/option/" + params.optionId;
        var options = {
            uri: this.context.makeUrl(endpoint, 'api'),
            method: 'GET',
            json: true,
            followAllRedirects: true
        };
        return this.context.sendRequest(options, callback);
    };
    Field.prototype.updateIssueFieldOption = function (params, callback) {
        var endpoint = this.prefix + "/" + params.fieldKey + "/option/" + params.optionId;
        var options = {
            uri: this.context.makeUrl(endpoint, 'api'),
            method: 'PUT',
            json: true,
            followAllRedirects: true,
            body: {
                id: params.id,
                value: params.value,
                properties: params.properties,
                config: params.config
            }
        };
        return this.context.sendRequest(options, callback);
    };
    Field.prototype.deleteIssueFieldOption = function (params, callback) {
        var endpoint = this.prefix + "/" + params.fieldKey + "/option/" + params.optionId;
        var options = {
            uri: this.context.makeUrl(endpoint, 'api'),
            method: 'DELETE',
            json: true,
            followAllRedirects: true
        };
        return this.context.sendRequest(options, callback);
    };
    Field.prototype.replaceIssueFieldOption = function (params, callback) {
        var endpoint = this.prefix + "/" + params.fieldKey + "/option/" + params.optionId + "/issue";
        var options = {
            uri: this.context.makeUrl(endpoint, 'api'),
            method: 'DELETE',
            json: true,
            followAllRedirects: true,
            qs: {
                replaceWith: params.replaceWith,
                jql: params.jql
            }
        };
        return this.context.sendRequest(options, callback);
    };
    return Field;
}());
exports.Field = Field;
