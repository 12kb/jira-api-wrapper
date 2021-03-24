"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Backlog = void 0;
var Backlog = /** @class */ (function () {
    function Backlog(context) {
        this.context = context;
        this.prefix = 'backlog';
    }
    Backlog.prototype.moveIssuesToBacklog = function (params, callback) {
        var endpoint = this.prefix + "/issue";
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
    Backlog.prototype.moveIssuesToBacklogForBoard = function (params, callback) {
        var endpoint = this.prefix + "/" + params.boardId + "/issue";
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
    return Backlog;
}());
exports.Backlog = Backlog;
