"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Configuration = void 0;
var Configuration = /** @class */ (function () {
    function Configuration(context) {
        this.prefix = 'configuration';
        this.context = context;
    }
    Configuration.prototype.getGlobalSettings = function (callback) {
        var endpoint = this.prefix;
        var options = {
            uri: this.context.makeUrl(endpoint, 'api'),
            method: 'GET',
            json: true,
            followAllRedirects: true
        };
        return this.context.sendRequest(options, callback);
    };
    Configuration.prototype.getSelectedTimeTrackingProvider = function (callback) {
        var endpoint = this.prefix + "/timetracking";
        var options = {
            uri: this.context.makeUrl(endpoint, 'api'),
            method: 'GET',
            json: true,
            followAllRedirects: true
        };
        return this.context.sendRequest(options, callback);
    };
    Configuration.prototype.selectTimeTrackingProvider = function (params, callback) {
        var endpoint = this.prefix + "/timetracking";
        var options = {
            uri: this.context.makeUrl(endpoint, 'api'),
            method: 'PUT',
            json: true,
            followAllRedirects: true,
            body: {
                key: params.key,
                name: params.name
            }
        };
        return this.context.sendRequest(options, callback);
    };
    Configuration.prototype.disableTimeTracking = function (callback) {
        var endpoint = this.prefix + "/timetracking";
        var options = {
            uri: this.context.makeUrl(endpoint, 'api'),
            method: 'DELETE',
            json: true,
            followAllRedirects: true
        };
        return this.context.sendRequest(options, callback);
    };
    Configuration.prototype.getAllTimeTrackingProviders = function (callback) {
        var endpoint = this.prefix + "/timetracking/list";
        var options = {
            uri: this.context.makeUrl(endpoint, 'api'),
            method: 'GET',
            json: true,
            followAllRedirects: true
        };
        return this.context.sendRequest(options, callback);
    };
    Configuration.prototype.getTimeTrackingSettings = function (callback) {
        var endpoint = this.prefix + "/timetracking/options";
        var options = {
            uri: this.context.makeUrl(endpoint, 'api'),
            method: 'GET',
            json: true,
            followAllRedirects: true
        };
        return this.context.sendRequest(options, callback);
    };
    Configuration.prototype.setTimeTrackingSettings = function (params, callback) {
        var endpoint = this.prefix + "/timetracking/options";
        var options = {
            uri: this.context.makeUrl(endpoint, 'api'),
            method: 'PUT',
            json: true,
            followAllRedirects: true,
            body: {
                workingHoursPerDay: params.workingHoursPerDay,
                workingDaysPerWeek: params.workingDaysPerWeek,
                timeFormat: params.timeFormat,
                defaultUnit: params.defaultUnit
            }
        };
        return this.context.sendRequest(options, callback);
    };
    return Configuration;
}());
exports.Configuration = Configuration;
