"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Group = void 0;
var Group = /** @class */ (function () {
    function Group(context) {
        this.prefix = 'group';
        this.context = context;
    }
    /**
     * @deprecated use getUsersFromGroup({ params })
     */
    Group.prototype.getGroup = function (params, callback) {
        var endpoint = this.prefix;
        var options = {
            uri: this.context.makeUrl(endpoint, 'api'),
            method: 'GET',
            json: true,
            followAllRedirects: true,
            qs: {
                groupname: params.groupname,
                expand: params.expand
            }
        };
        return this.context.sendRequest(options, callback);
    };
    Group.prototype.createGroup = function (params, callback) {
        var endpoint = this.prefix;
        var options = {
            uri: this.context.makeUrl(endpoint, 'api'),
            method: 'POST',
            json: true,
            followAllRedirects: true,
            body: {
                name: params.name
            }
        };
        return this.context.sendRequest(options, callback);
    };
    Group.prototype.removeGroup = function (params, callback) {
        var endpoint = this.prefix;
        var options = {
            uri: this.context.makeUrl(endpoint, 'api'),
            method: 'DELETE',
            json: true,
            followAllRedirects: true,
            qs: {
                groupname: params.groupname,
                swapGroup: params.swapGroup
            }
        };
        return this.context.sendRequest(options, callback);
    };
    Group.prototype.getUsersFromGroup = function (params, callback) {
        var endpoint = this.prefix + "/member";
        var options = {
            uri: this.context.makeUrl(endpoint, 'api'),
            method: 'GET',
            json: true,
            followAllRedirects: true,
            qs: {
                groupname: params.groupname,
                includeInactiveUsers: params.includeInactiveUsers,
                startAt: params.startAt,
                maxResults: params.maxResults
            }
        };
        return this.context.sendRequest(options, callback);
    };
    Group.prototype.addUserToGroup = function (params, callback) {
        var endpoint = this.prefix + "/user";
        var options = {
            uri: this.context.makeUrl(endpoint, 'api'),
            method: 'POST',
            json: true,
            followAllRedirects: true,
            qs: {
                groupname: params.groupname
            },
            body: {
                name: params.name,
                accountId: params.accountId
            }
        };
        return this.context.sendRequest(options, callback);
    };
    Group.prototype.removeUserFromGroup = function (params, callback) {
        var endpoint = this.prefix + "/user";
        var options = {
            uri: this.context.makeUrl(endpoint, 'api'),
            method: 'DELETE',
            json: true,
            followAllRedirects: true,
            qs: {
                groupname: params.groupname,
                username: params.username,
                accountId: params.accountId
            }
        };
        return this.context.sendRequest(options, callback);
    };
    return Group;
}());
exports.Group = Group;
