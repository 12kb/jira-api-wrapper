"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Dashboard = void 0;
var Dashboard = /** @class */ (function () {
    function Dashboard(context) {
        this.prefix = 'dashboard';
        this.context = context;
    }
    Dashboard.prototype.getAllDashboards = function (params, callback) {
        var endpoint = this.prefix;
        params = params || {};
        var options = {
            uri: this.context.makeUrl(endpoint, 'api'),
            method: 'GET',
            json: true,
            followAllRedirects: true,
            qs: {
                filter: params.filter,
                startAt: params.startAt,
                maxResults: params.maxResults
            }
        };
        return this.context.sendRequest(options, callback);
    };
    Dashboard.prototype.searchForDashboards = function (params, callback) {
        var endpoint = this.prefix + "/search";
        params = params || {};
        var options = {
            uri: this.context.makeUrl(endpoint, 'api'),
            method: 'GET',
            json: true,
            followAllRedirects: true,
            qs: {
                dashboardName: params.dashboardName,
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
    Dashboard.prototype.getDashboardItemPropertyKeys = function (params, callback) {
        var endpoint = this.prefix + "/" + params.dashboardId + "/items/" + params.itemId + "/properties";
        var options = {
            uri: this.context.makeUrl(endpoint, 'api'),
            method: 'GET',
            json: true,
            followAllRedirects: true
        };
        return this.context.sendRequest(options, callback);
    };
    Dashboard.prototype.getDashboardItemProperty = function (params, callback) {
        var endpoint = this.prefix + "/" + params.dashboardId + "/items/" + params.itemId + "/properties/" + params.propertyKey;
        var options = {
            uri: this.context.makeUrl(endpoint, 'api'),
            method: 'GET',
            json: true,
            followAllRedirects: true
        };
        return this.context.sendRequest(options, callback);
    };
    Dashboard.prototype.setDashboardItemProperty = function (params, callback) {
        var endpoint = this.prefix + "/" + params.dashboardId + "/items/" + params.itemId + "/properties/" + params.propertyKey;
        var options = {
            uri: this.context.makeUrl(endpoint, 'api'),
            method: 'PUT',
            json: true,
            followAllRedirects: true
        };
        return this.context.sendRequest(options, callback);
    };
    Dashboard.prototype.deleteDashboardItemProperty = function (params, callback) {
        var endpoint = this.prefix + "/" + params.dashboardId + "/items/" + params.itemId + "/properties/" + params.propertyKey;
        var options = {
            uri: this.context.makeUrl(endpoint, 'api'),
            method: 'DELETE',
            json: true,
            followAllRedirects: true
        };
        return this.context.sendRequest(options, callback);
    };
    Dashboard.prototype.getDashboard = function (params, callback) {
        var endpoint = this.prefix + "/" + params.id;
        var options = {
            uri: this.context.makeUrl(endpoint, 'api'),
            method: 'GET',
            json: true,
            followAllRedirects: true
        };
        return this.context.sendRequest(options, callback);
    };
    return Dashboard;
}());
exports.Dashboard = Dashboard;
