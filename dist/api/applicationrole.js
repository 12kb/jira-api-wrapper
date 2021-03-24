"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Applicationrole = void 0;
var Applicationrole = /** @class */ (function () {
    function Applicationrole(context) {
        this.context = context;
        this.prefix = 'applicationrole';
    }
    Applicationrole.prototype.getAllApplicationRoles = function (callback) {
        var endpoint = this.prefix;
        var options = {
            uri: this.context.makeUrl(endpoint, 'api'),
            method: 'GET',
            json: true,
            followAllRedirects: true
        };
        return this.context.sendRequest(options, callback);
    };
    Applicationrole.prototype.getApplicationRole = function (params, callback) {
        var endpoint = this.prefix + "/" + params.key;
        var options = {
            uri: this.context.makeUrl(endpoint, 'api'),
            method: 'GET',
            json: true,
            followAllRedirects: true
        };
        return this.context.sendRequest(options, callback);
    };
    return Applicationrole;
}());
exports.Applicationrole = Applicationrole;
