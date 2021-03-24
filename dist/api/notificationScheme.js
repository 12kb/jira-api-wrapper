"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotificationScheme = void 0;
var NotificationScheme = /** @class */ (function () {
    function NotificationScheme(context) {
        this.prefix = 'notificationscheme';
        this.context = context;
    }
    NotificationScheme.prototype.getNotificationSchemesPaginated = function (params, callback) {
        var endpoint = this.prefix;
        params = params || {};
        var options = {
            uri: this.context.makeUrl(endpoint, 'api'),
            method: 'GET',
            json: true,
            followAllRedirects: true,
            qs: {
                startAt: params.startAt,
                maxResults: params.maxResults,
                expand: params.expand
            }
        };
        return this.context.sendRequest(options, callback);
    };
    NotificationScheme.prototype.getNotificationScheme = function (params, callback) {
        var endpoint = this.prefix + "/" + params.id;
        var options = {
            uri: this.context.makeUrl(endpoint, 'api'),
            method: 'GET',
            json: true,
            followAllRedirects: true,
            qs: {
                expand: params.expand
            }
        };
        return this.context.sendRequest(options, callback);
    };
    return NotificationScheme;
}());
exports.NotificationScheme = NotificationScheme;
