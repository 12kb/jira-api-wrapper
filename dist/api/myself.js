"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Myself = void 0;
var Myself = /** @class */ (function () {
    function Myself(context) {
        this.prefix = 'myself';
        this.context = context;
    }
    Myself.prototype.getCurrentUser = function (params, callback) {
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
    return Myself;
}());
exports.Myself = Myself;
