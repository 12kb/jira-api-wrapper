"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FeatureFlags = void 0;
var FeatureFlags = /** @class */ (function () {
    function FeatureFlags(context) {
        this.context = context;
    }
    FeatureFlags.prototype.submitFeatureFlagData = function (params, callback) {
        var endpoint = 'bulk';
        var options = {
            uri: this.context.makeUrl(endpoint, 'featureFlags'),
            method: 'POST',
            headers: {
                Authorization: params.Authorization
            },
            json: true,
            followAllRedirects: true,
            body: {
                properties: params.properties,
                flags: params.flags
            }
        };
        return this.context.sendRequest(options, callback);
    };
    FeatureFlags.prototype.deleteFeatureFlagsByProperty = function (params, callback) {
        var endpoint = 'bulkByProperties';
        var options = {
            uri: this.context.makeUrl(endpoint, 'featureFlags'),
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
    FeatureFlags.prototype.getFeatureFlagById = function (params, callback) {
        var endpoint = "flag/" + params.featureFlagId;
        var options = {
            uri: this.context.makeUrl(endpoint, 'featureFlags'),
            method: 'GET',
            headers: {
                Authorization: params.Authorization
            },
            json: true,
            followAllRedirects: true
        };
        return this.context.sendRequest(options, callback);
    };
    FeatureFlags.prototype.deleteFeatureFlagById = function (params, callback) {
        var endpoint = "flag/" + params.featureFlagId;
        var options = {
            uri: this.context.makeUrl(endpoint, 'featureFlags'),
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
    return FeatureFlags;
}());
exports.FeatureFlags = FeatureFlags;
