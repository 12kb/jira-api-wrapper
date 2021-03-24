"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Avatar = void 0;
var Avatar = /** @class */ (function () {
    function Avatar(context) {
        this.context = context;
        this.prefix = 'avatar';
    }
    Avatar.prototype.getSystemAvatarsByType = function (params, callback) {
        var endpoint = this.prefix + "/" + params.type + "/system";
        var options = {
            uri: this.context.makeUrl(endpoint, 'api'),
            method: 'GET',
            json: true,
            followAllRedirects: true
        };
        return this.context.sendRequest(options, callback);
    };
    return Avatar;
}());
exports.Avatar = Avatar;
