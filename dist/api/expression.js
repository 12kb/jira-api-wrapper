"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Expression = void 0;
var Expression = /** @class */ (function () {
    function Expression(context) {
        this.prefix = 'expression';
        this.context = context;
    }
    Expression.prototype.evaluateJiraExpression = function (params, callback) {
        var endpoint = this.prefix + "/eval";
        params = params || {};
        var options = {
            uri: this.context.makeUrl(endpoint, 'api'),
            method: 'POST',
            json: true,
            followAllRedirects: true,
            qs: {
                expand: params.expand,
            },
            body: {
                expression: params.expression,
                context: params.context
            }
        };
        return this.context.sendRequest(options, callback);
    };
    return Expression;
}());
exports.Expression = Expression;
