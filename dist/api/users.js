"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Users = void 0;
var Users = /** @class */ (function () {
    function Users(context) {
        this.prefix = 'user';
        this.context = context;
    }
    Users.prototype.findUsers = function (params, callback) {
        var endpoint = this.prefix + "/search";
        params = params || {};
        var options = {
            uri: this.context.makeUrl(endpoint, 'api'),
            method: 'GET',
            json: true,
            followAllRedirects: true,
            qs: {
                accountId: params.accountId,
                username: params.username,
                query: params.query,
                property: params.property,
                startAt: params.startAt,
                maxResults: params.maxResults
            }
        };
        return this.context.sendRequest(options, callback);
    };
    return Users;
}());
exports.Users = Users;
