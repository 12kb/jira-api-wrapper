"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApplicationProperties = void 0;
var ApplicationProperties = /** @class */ (function () {
    function ApplicationProperties(context) {
        this.context = context;
        this.prefix = 'application-properties';
    }
    ApplicationProperties.prototype.getApplicationProperty = function (params, callback) {
        var endpoint = this.prefix;
        params = params || {};
        var options = {
            uri: this.context.makeUrl(endpoint, 'api'),
            method: 'GET',
            json: true,
            followAllRedirects: true,
            qs: {
                key: params.key,
                permissionLevel: params.permissionLevel,
                keyFilter: params.keyFilter
            }
        };
        return this.context.sendRequest(options, callback);
    };
    ApplicationProperties.prototype.getAdvancedSettings = function (callback) {
        var endpoint = this.prefix + "/advanced-settings";
        var options = {
            uri: this.context.makeUrl(endpoint, 'api'),
            method: 'GET',
            json: true,
            followAllRedirects: true
        };
        return this.context.sendRequest(options, callback);
    };
    ApplicationProperties.prototype.setApplicationProperty = function (params, callback) {
        var endpoint = this.prefix + "/" + params.idPath;
        var options = {
            uri: this.context.makeUrl(endpoint, 'api'),
            method: 'PUT',
            json: true,
            followAllRedirects: true,
            body: {
                id: params.id,
                value: params.value
            }
        };
        return this.context.sendRequest(options, callback);
    };
    return ApplicationProperties;
}());
exports.ApplicationProperties = ApplicationProperties;
