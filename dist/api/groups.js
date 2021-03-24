"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Groups = void 0;
var Groups = /** @class */ (function () {
    function Groups(context) {
        this.prefix = 'groups';
        this.context = context;
    }
    Groups.prototype.findGroups = function (params, callback) {
        var endpoint = this.prefix + "/picker";
        params = params || {};
        var options = {
            uri: this.context.makeUrl(endpoint, 'api'),
            method: 'GET',
            json: true,
            followAllRedirects: true,
            qs: {
                accountId: params.accountId,
                query: params.query,
                exclude: params.exclude ? params.exclude.join(',') : undefined,
                maxResults: params.maxResults,
                userName: params.userName
            }
        };
        return this.context.sendRequest(options, callback);
    };
    return Groups;
}());
exports.Groups = Groups;
