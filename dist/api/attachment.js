"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Attachment = void 0;
var Attachment = /** @class */ (function () {
    function Attachment(context) {
        this.context = context;
        this.prefix = 'attachment';
    }
    Attachment.prototype.getGlobalAttachmentSettings = function (callback) {
        var endpoint = this.prefix + "/meta";
        var options = {
            uri: this.context.makeUrl(endpoint, 'api'),
            method: 'GET',
            json: true,
            followAllRedirects: true
        };
        return this.context.sendRequest(options, callback);
    };
    Attachment.prototype.getAttachmentMetadata = function (params, callback) {
        var endpoint = this.prefix + "/" + params.id;
        var options = {
            uri: this.context.makeUrl(endpoint, 'api'),
            method: 'GET',
            json: true,
            followAllRedirects: true
        };
        return this.context.sendRequest(options, callback);
    };
    Attachment.prototype.deleteAttachment = function (params, callback) {
        var endpoint = this.prefix + "/" + params.id;
        var options = {
            uri: this.context.makeUrl(endpoint, 'api'),
            method: 'DELETE',
            json: true,
            followAllRedirects: true
        };
        return this.context.sendRequest(options, callback);
    };
    Attachment.prototype.getAllMetadata = function (params, callback) {
        var endpoint = this.prefix + "/" + params.id + "/expand/human";
        var options = {
            uri: this.context.makeUrl(endpoint, 'api'),
            method: 'GET',
            json: true,
            followAllRedirects: true
        };
        return this.context.sendRequest(options, callback);
    };
    Attachment.prototype.getContentsMetadata = function (params, callback) {
        var endpoint = this.prefix + "/" + params.id + "/expand/raw";
        var options = {
            uri: this.context.makeUrl(endpoint, 'api'),
            method: 'GET',
            json: true,
            followAllRedirects: true
        };
        return this.context.sendRequest(options, callback);
    };
    return Attachment;
}());
exports.Attachment = Attachment;
