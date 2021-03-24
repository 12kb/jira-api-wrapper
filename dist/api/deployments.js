"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Deployments = void 0;
var Deployments = /** @class */ (function () {
    function Deployments(context) {
        this.prefix = 'deployments';
        this.context = context;
    }
    Deployments.prototype.submitDeploymentData = function (params, callback) {
        var endpoint = 'bulk';
        var options = {
            uri: this.context.makeUrl(endpoint, 'deployment'),
            method: 'POST',
            headers: {
                Authorization: params.Authorization
            },
            json: true,
            followAllRedirects: true,
            body: {
                properties: params.properties,
                deployments: params.deployments
            }
        };
        return this.context.sendRequest(options, callback);
    };
    Deployments.prototype.deleteDeploymentsByProperty = function (params, callback) {
        var endpoint = 'bulkByProperties';
        var options = {
            uri: this.context.makeUrl(endpoint, 'deployment'),
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
    Deployments.prototype.getDeploymentByKey = function (params, callback) {
        var endpoint = "pipelines/" + params.pipelineId + "\n      /environments/" + params.environmentId + "\n      /deployments/" + params.deploymentSequenceNumber;
        var options = {
            uri: this.context.makeUrl(endpoint, 'deployment'),
            method: 'GET',
            headers: {
                Authorization: params.Authorization
            },
            json: true,
            followAllRedirects: true
        };
        return this.context.sendRequest(options, callback);
    };
    Deployments.prototype.deleteDeploymentByKey = function (params, callback) {
        var endpoint = "pipelines/" + params.pipelineId + "/\n      environments/" + params.environmentId + "/\n      deployments/" + params.deploymentSequenceNumber;
        var options = {
            uri: this.context.makeUrl(endpoint, 'deployment'),
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
    return Deployments;
}());
exports.Deployments = Deployments;
