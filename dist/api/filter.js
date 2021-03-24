"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Filter = void 0;
var Filter = /** @class */ (function () {
    function Filter(context) {
        this.prefix = 'filter';
        this.context = context;
    }
    /**
     * @deprecated
     */
    Filter.prototype.getFilters = function (params, callback) {
        var endpoint = this.prefix;
        params = params || {};
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
    Filter.prototype.createFilter = function (params, callback) {
        var endpoint = this.prefix;
        params = params || {};
        var options = {
            uri: this.context.makeUrl(endpoint, 'api'),
            method: 'POST',
            json: true,
            followAllRedirects: true,
            qs: {
                expand: params.expand
            },
            body: {
                name: params.name,
                description: params.description,
                jql: params.jql,
                favourite: params.favourite,
                sharePermissions: params.sharePermissions
            }
        };
        return this.context.sendRequest(options, callback);
    };
    Filter.prototype.getDefaultShareScope = function (callback) {
        var endpoint = this.prefix + "/defaultShareScope";
        var options = {
            uri: this.context.makeUrl(endpoint, 'api'),
            method: 'GET',
            json: true,
            followAllRedirects: true
        };
        return this.context.sendRequest(options, callback);
    };
    Filter.prototype.setDefaultShareScope = function (params, callback) {
        var endpoint = this.prefix + "/defaultShareScope";
        var options = {
            uri: this.context.makeUrl(endpoint, 'api'),
            method: 'PUT',
            json: true,
            followAllRedirects: true,
            body: {
                scope: params.scope
            }
        };
        return this.context.sendRequest(options, callback);
    };
    Filter.prototype.getFavoriteFilters = function (params, callback) {
        var endpoint = this.prefix + "/favourite";
        params = params || {};
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
    Filter.prototype.getMyFilters = function (params, callback) {
        var endpoint = this.prefix + "/my";
        params = params || {};
        var options = {
            uri: this.context.makeUrl(endpoint, 'api'),
            method: 'GET',
            json: true,
            followAllRedirects: true,
            qs: {
                expand: params.expand,
                includeFavourites: params.includeFavourites
            }
        };
        return this.context.sendRequest(options, callback);
    };
    Filter.prototype.searchForFilters = function (params, callback) {
        var endpoint = this.prefix + "/search";
        params = params || {};
        var options = {
            uri: this.context.makeUrl(endpoint, 'api'),
            method: 'GET',
            json: true,
            followAllRedirects: true,
            qs: {
                filterName: params.filterName,
                accountId: params.accountId,
                owner: params.owner,
                groupname: params.groupname,
                projectId: params.projectId,
                orderBy: params.orderBy,
                startAt: params.startAt,
                maxResults: params.maxResults,
                expand: params.expand
            }
        };
        return this.context.sendRequest(options, callback);
    };
    Filter.prototype.getFilter = function (params, callback) {
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
    Filter.prototype.updateFilter = function (params, callback) {
        var endpoint = this.prefix + "/" + params.id;
        var options = {
            uri: this.context.makeUrl(endpoint, 'api'),
            method: 'PUT',
            json: true,
            followAllRedirects: true,
            qs: {
                expand: params.expand
            },
            body: {
                name: params.name,
                description: params.description,
                jql: params.jql,
                favourite: params.favourite,
                sharePermissions: params.sharePermissions
            }
        };
        return this.context.sendRequest(options, callback);
    };
    Filter.prototype.deleteFilter = function (params, callback) {
        var endpoint = this.prefix + "/" + params.id;
        var options = {
            uri: this.context.makeUrl(endpoint, 'api'),
            method: 'DELETE',
            json: true,
            followAllRedirects: true
        };
        return this.context.sendRequest(options, callback);
    };
    Filter.prototype.getColumns = function (params, callback) {
        var endpoint = this.prefix + "/" + params.id + "/columns";
        var options = {
            uri: this.context.makeUrl(endpoint, 'api'),
            method: 'GET',
            json: true,
            followAllRedirects: true
        };
        return this.context.sendRequest(options, callback);
    };
    Filter.prototype.setColumns = function (params, callback) {
        var endpoint = this.prefix + "/" + params.id + "/columns";
        var options = {
            uri: this.context.makeUrl(endpoint, 'api'),
            method: 'PUT',
            json: true,
            headers: {
                'Content-Type': '*/*'
            },
            followAllRedirects: true,
            body: params.body
        };
        return this.context.sendRequest(options, callback);
    };
    Filter.prototype.resetColumns = function (params, callback) {
        var endpoint = this.prefix + "/" + params.id + "/columns";
        var options = {
            uri: this.context.makeUrl(endpoint, 'api'),
            method: 'DELETE',
            json: true,
            followAllRedirects: true
        };
        return this.context.sendRequest(options, callback);
    };
    Filter.prototype.addFilterAsFavorite = function (params, callback) {
        var endpoint = this.prefix + "/" + params.id + "/favourite";
        var options = {
            uri: this.context.makeUrl(endpoint, 'api'),
            method: 'PUT',
            json: true,
            followAllRedirects: true,
            qs: {
                expand: params.expand
            }
        };
        return this.context.sendRequest(options, callback);
    };
    Filter.prototype.removeFilterAsFavorite = function (params, callback) {
        var endpoint = this.prefix + "/" + params.id + "/favourite";
        var options = {
            uri: this.context.makeUrl(endpoint, 'api'),
            method: 'DELETE',
            json: true,
            followAllRedirects: true,
            qs: {
                expand: params.expand
            }
        };
        return this.context.sendRequest(options, callback);
    };
    Filter.prototype.getSharePermissions = function (params, callback) {
        var endpoint = this.prefix + "/" + params.id + "/permission";
        var options = {
            uri: this.context.makeUrl(endpoint, 'api'),
            method: 'GET',
            json: true,
            followAllRedirects: true
        };
        return this.context.sendRequest(options, callback);
    };
    Filter.prototype.addSharePermissions = function (params, callback) {
        var endpoint = this.prefix + "/" + params.id + "/permission";
        var options = {
            uri: this.context.makeUrl(endpoint, 'api'),
            method: 'POST',
            json: true,
            followAllRedirects: true,
            body: {
                type: params.type,
                projectId: params.projectId,
                groupname: params.groupname,
                projectRoleId: params.projectRoleId
            }
        };
        return this.context.sendRequest(options, callback);
    };
    Filter.prototype.getSharePermission = function (params, callback) {
        var endpoint = this.prefix + "/" + params.id + "/permission/" + params.permissionId;
        var options = {
            uri: this.context.makeUrl(endpoint, 'api'),
            method: 'GET',
            json: true,
            followAllRedirects: true
        };
        return this.context.sendRequest(options, callback);
    };
    Filter.prototype.deleteSharePermission = function (params, callback) {
        var endpoint = this.prefix + "/" + params.id + "/permission/" + params.permissionId;
        var options = {
            uri: this.context.makeUrl(endpoint, 'api'),
            method: 'DELETE',
            json: true,
            followAllRedirects: true
        };
        return this.context.sendRequest(options, callback);
    };
    return Filter;
}());
exports.Filter = Filter;
