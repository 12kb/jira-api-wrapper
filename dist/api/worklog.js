"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Worklog = void 0;
var Worklog = /** @class */ (function () {
    function Worklog(context) {
        this.prefix = 'worklog';
        this.context = context;
    }
    Worklog.prototype.getIDsOfDeletedWorklogs = function (params, callback) {
        var endpoint = this.prefix + "/deleted";
        params = params || {};
        var options = {
            uri: this.context.makeUrl(endpoint, 'api'),
            method: 'GET',
            json: true,
            followAllRedirects: true,
            qs: {
                since: params.since
            }
        };
        return this.context.sendRequest(options, callback);
    };
    Worklog.prototype.getWorklogs = function (params, callback) {
        var endpoint = this.prefix + "/list";
        var options = {
            uri: this.context.makeUrl(endpoint, 'api'),
            method: 'POST',
            json: true,
            followAllRedirects: true,
            qs: {
                expand: params.expand
            },
            body: {
                ids: params.ids
            }
        };
        return this.context.sendRequest(options, callback);
    };
    Worklog.prototype.getIDsOfUpdatedWorklogs = function (params, callback) {
        var endpoint = this.prefix + "/updated";
        params = params || {};
        var options = {
            uri: this.context.makeUrl(endpoint, 'api'),
            method: 'GET',
            json: true,
            followAllRedirects: true,
            qs: {
                since: params.since,
                expand: params.expand
            }
        };
        return this.context.sendRequest(options, callback);
    };
    return Worklog;
}());
exports.Worklog = Worklog;
