"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Auditing = void 0;
var Auditing = /** @class */ (function () {
    function Auditing(context) {
        this.context = context;
        this.prefix = 'auditing';
    }
    Auditing.prototype.getAuditRecords = function (params, callback) {
        var endpoint = this.prefix + "/record";
        params = params || {};
        var options = {
            uri: this.context.makeUrl(endpoint, 'api'),
            method: 'GET',
            json: true,
            followAllRedirects: true,
            qs: {
                offset: params.offset,
                limit: params.limit,
                filter: params.filter,
                from: params.from,
                to: params.to
            }
        };
        return this.context.sendRequest(options, callback);
    };
    return Auditing;
}());
exports.Auditing = Auditing;
