"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Search = void 0;
var Search = /** @class */ (function () {
    function Search(context) {
        this.prefix = 'search';
        this.context = context;
    }
    Search.prototype.search = function (params, callback) {
        params = params || {};
        params.method = params.method || 'POST';
        var options = {
            uri: this.context.makeUrl(this.prefix, 'api'),
            method: params.method,
            json: true,
            followAllRedirects: true,
            timeout: params.timeout || 10000,
        };
        // todo check properties field when called GET query
        var searchParams = {
            jql: params.jql,
            startAt: params.startAt,
            maxResults: params.maxResults,
            validateQuery: params.validateQuery,
            fields: params.fields,
            expand: params.expand,
            properties: params.properties,
            fieldsByKeys: params.fieldsByKeys
        };
        if (params.method === 'POST') {
            options.body = searchParams;
        }
        else {
            options.qs = searchParams;
        }
        return this.context.sendRequest(options, callback);
    };
    return Search;
}());
exports.Search = Search;
