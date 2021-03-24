"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Comment = void 0;
var Comment = /** @class */ (function () {
    function Comment(context) {
        this.prefix = 'comment';
        this.context = context;
    }
    Comment.prototype.getCommentsByIDs = function (params, callback) {
        var endpoint = this.prefix + "/list";
        params = params || {};
        var options = {
            uri: this.context.makeUrl(endpoint, 'api'),
            method: 'POST',
            json: true,
            followAllRedirects: true,
            qs: {
                expand: params.expand
            },
            body: {
                ids: params.ids
            }
        };
        return this.context.sendRequest(options, callback);
    };
    Comment.prototype.getCommentPropertyKeys = function (params, callback) {
        var endpoint = this.prefix + "/" + params.commentId + "/properties";
        var options = {
            uri: this.context.makeUrl(endpoint, 'api'),
            method: 'GET',
            json: true,
            followAllRedirects: true
        };
        return this.context.sendRequest(options, callback);
    };
    Comment.prototype.getCommentProperty = function (params, callback) {
        var endpoint = this.prefix + "/" + params.commentId + "/properties/" + params.propertyKey;
        var options = {
            uri: this.context.makeUrl(endpoint, 'api'),
            method: 'GET',
            json: true,
            followAllRedirects: true
        };
        return this.context.sendRequest(options, callback);
    };
    Comment.prototype.setCommentProperty = function (params, callback) {
        var endpoint = this.prefix + "/" + params.commentId + "/properties/" + params.propertyKey;
        var options = {
            uri: this.context.makeUrl(endpoint, 'api'),
            method: 'PUT',
            json: true,
            followAllRedirects: true,
            body: params.body
        };
        return this.context.sendRequest(options, callback);
    };
    Comment.prototype.deleteCommentProperty = function (params, callback) {
        var endpoint = this.prefix + "/" + params.commentId + "/properties/" + params.propertyKey;
        var options = {
            uri: this.context.makeUrl(endpoint, 'api'),
            method: 'DELETE',
            json: true,
            followAllRedirects: true
        };
        return this.context.sendRequest(options, callback);
    };
    return Comment;
}());
exports.Comment = Comment;
