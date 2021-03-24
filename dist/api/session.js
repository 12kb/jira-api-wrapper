"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Session = void 0;
/**
 * @deprecated This resource is deprecated and will be removed December 1, 2018. For more information,
 * see [Deprecation notice - Basic authentication with passwords and cookie-based authentication]
 * {@link https://developer.atlassian.com/cloud/jira/platform/deprecation-notice-basic-auth-and-cookie-based-auth/}.
 */
var Session = /** @class */ (function () {
    function Session(context) {
        this.prefix = 'session';
        this.context = context;
    }
    /**
     * @deprecated This resource is deprecated and will be removed December 1, 2018. For more information,
     * see [Deprecation notice - Basic authentication with passwords and cookie-based authentication]
     * {@link https://developer.atlassian.com/cloud/jira/platform/deprecation-notice-basic-auth-and-cookie-based-auth/}.
     */
    Session.prototype.getSession = function (callback) {
        var endpoint = this.prefix;
        var options = {
            uri: this.context.makeUrl(endpoint, 'auth'),
            method: 'GET',
            json: true,
            followAllRedirects: true
        };
        return this.context.sendRequest(options, callback);
    };
    /**
     * @deprecated This resource is deprecated and will be removed December 1, 2018. For more information,
     * see [Deprecation notice - Basic authentication with passwords and cookie-based authentication]
     * {@link https://developer.atlassian.com/cloud/jira/platform/deprecation-notice-basic-auth-and-cookie-based-auth/}.
     */
    Session.prototype.createSession = function (params, callback) {
        var endpoint = this.prefix;
        var options = {
            uri: this.context.makeUrl(endpoint, 'auth'),
            method: 'POST',
            json: true,
            followAllRedirects: true,
            body: {
                username: params.username,
                password: params.password
            }
        };
        return this.context.sendRequest(options, callback);
    };
    /**
     * @deprecated This resource is deprecated and will be removed December 1, 2018. For more information,
     * see [Deprecation notice - Basic authentication with passwords and cookie-based authentication]
     * {@link https://developer.atlassian.com/cloud/jira/platform/deprecation-notice-basic-auth-and-cookie-based-auth/}.
     */
    Session.prototype.deleteSession = function (callback) {
        var endpoint = this.prefix;
        var options = {
            uri: this.context.makeUrl(endpoint, 'auth'),
            method: 'DELETE',
            json: true,
            followAllRedirects: true
        };
        return this.context.sendRequest(options, callback);
    };
    return Session;
}());
exports.Session = Session;
