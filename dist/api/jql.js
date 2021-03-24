"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Jql = void 0;
var Jql = /** @class */ (function () {
    function Jql(context) {
        this.context = context;
        this.prefix = 'jql';
    }
    Jql.prototype.getFieldReferenceData = function (callback) {
        var endpoint = this.prefix + "/autocompletedata";
        var options = {
            uri: this.context.makeUrl(endpoint, 'api'),
            method: 'GET',
            json: true,
            followAllRedirects: true
        };
        return this.context.sendRequest(options, callback);
    };
    Jql.prototype.getFieldAutoCompleteSuggestions = function (params, callback) {
        var endpoint = this.prefix + "/autocompletedata/suggestions";
        params = params || {};
        var options = {
            uri: this.context.makeUrl(endpoint, 'api'),
            method: 'GET',
            json: true,
            followAllRedirects: true,
            qs: {
                fieldName: params.fieldName,
                fieldValue: params.fieldValue,
                predicateName: params.predicateName,
                predicateValue: params.predicateValue
            }
        };
        return this.context.sendRequest(options, callback);
    };
    Jql.prototype.convertUserIdentifiers = function (params, callback) {
        var endpoint = this.prefix + "/pdcleaner";
        params = params || {};
        var options = {
            uri: this.context.makeUrl(endpoint, 'api'),
            method: 'POST',
            json: true,
            followAllRedirects: true,
            body: {
                queryStrings: params.queryStrings
            }
        };
        return this.context.sendRequest(options, callback);
    };
    return Jql;
}());
exports.Jql = Jql;
