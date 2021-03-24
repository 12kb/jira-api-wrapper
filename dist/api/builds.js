"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Builds = void 0;
var Builds = /** @class */ (function () {
    function Builds(context) {
        this.context = context;
    }
    Builds.prototype.submitBuildData = function (params, callback) {
        var endpoint = 'bulk';
        var options = {
            uri: this.context.makeUrl(endpoint, 'builds'),
            method: 'POST',
            headers: {
                Authorization: params.Authorization
            },
            json: true,
            followAllRedirects: true,
            body: {
                properties: params.properties,
                builds: params.builds
            }
        };
        return this.context.sendRequest(options, callback);
    };
    Builds.prototype.deleteBuildsByProperty = function (params, callback) {
        var endpoint = 'bulkByProperties';
        var options = {
            uri: this.context.makeUrl(endpoint, 'builds'),
            method: 'DELETE',
            headers: {
                Authorization: params.Authorization
            },
            json: true,
            followAllRedirects: true,
            qs: {
                _updateSequenceNumber: params._updateSequenceNumber
            }
        };
        return this.context.sendRequest(options, callback);
    };
    Builds.prototype.getBuildByKey = function (params, callback) {
        var endpoint = "pipelines/" + params.pipelineId + "/builds/" + params.buildNumber;
        var options = {
            uri: this.context.makeUrl(endpoint, 'builds'),
            method: 'GET',
            headers: {
                Authorization: params.Authorization
            },
            json: true,
            followAllRedirects: true
        };
        return this.context.sendRequest(options, callback);
    };
    Builds.prototype.deleteBuildByKey = function (params, callback) {
        var endpoint = "pipelines/" + params.pipelineId + "/builds/" + params.buildNumber;
        var options = {
            uri: this.context.makeUrl(endpoint, 'builds'),
            method: 'GET',
            headers: {
                Authorization: params.Authorization
            },
            json: true,
            followAllRedirects: true,
            qs: {
                _updateSequenceNumber: params._updateSequenceNumber
            }
        };
        return this.context.sendRequest(options, callback);
    };
    return Builds;
}());
exports.Builds = Builds;
