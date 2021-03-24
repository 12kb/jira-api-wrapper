"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DevelopmentInformation = void 0;
var DevelopmentInformation = /** @class */ (function () {
    function DevelopmentInformation(context) {
        this.context = context;
    }
    DevelopmentInformation.prototype.storeDevelopmentInformation = function (params, callback) {
        var endpoint = 'bulk';
        var options = {
            uri: this.context.makeUrl(endpoint, 'devInfo'),
            method: 'POST',
            headers: {
                Authorization: params.Authorization
            },
            json: true,
            followAllRedirects: true,
            body: {
                repositories: params.repositories,
                preventTransitions: params.preventTransitions,
                properties: params.properties
            }
        };
        return this.context.sendRequest(options, callback);
    };
    DevelopmentInformation.prototype.getRepository = function (params, callback) {
        var endpoint = "repository/" + params.repositoryId;
        var options = {
            uri: this.context.makeUrl(endpoint, 'devInfo'),
            method: 'GET',
            headers: {
                Authorization: params.Authorization
            },
            json: true,
            followAllRedirects: true
        };
        return this.context.sendRequest(options, callback);
    };
    DevelopmentInformation.prototype.deleteRepository = function (params, callback) {
        var endpoint = "repository/" + params.repositoryId;
        var options = {
            uri: this.context.makeUrl(endpoint, 'devInfo'),
            method: 'DELETE',
            headers: {
                Authorization: params.Authorization
            },
            json: true,
            followAllRedirects: true,
            qs: {
                _updateSequenceId: params._updateSequenceId
            }
        };
        return this.context.sendRequest(options, callback);
    };
    DevelopmentInformation.prototype.deleteDevelopmentInformationByProperties = function (params, callback) {
        var endpoint = 'bulkByProperties';
        var options = {
            uri: this.context.makeUrl(endpoint, 'devInfo'),
            method: 'DELETE',
            headers: {
                Authorization: params.Authorization
            },
            json: true,
            followAllRedirects: true,
            qs: {
                _updateSequenceId: params._updateSequenceId
            }
        };
        return this.context.sendRequest(options, callback);
    };
    DevelopmentInformation.prototype.checkIfDataExistsForSuppliedProperties = function (params, callback) {
        var endpoint = 'existsByProperties';
        var options = {
            uri: this.context.makeUrl(endpoint, 'devInfo'),
            method: 'GET',
            headers: {
                Authorization: params.Authorization
            },
            json: true,
            followAllRedirects: true,
            qs: {
                _updateSequenceId: params._updateSequenceId
            }
        };
        return this.context.sendRequest(options, callback);
    };
    DevelopmentInformation.prototype.deleteDevelopmentInformationEntity = function (params, callback) {
        var endpoint = "repository/" + params.repositoryId + "/" + params.entityType + "/" + params.entityId;
        var options = {
            uri: this.context.makeUrl(endpoint, 'devInfo'),
            method: 'DELETE',
            headers: {
                Authorization: params.Authorization
            },
            json: true,
            followAllRedirects: true,
            qs: {
                _updateSequenceId: params._updateSequenceId
            }
        };
        return this.context.sendRequest(options, callback);
    };
    return DevelopmentInformation;
}());
exports.DevelopmentInformation = DevelopmentInformation;
