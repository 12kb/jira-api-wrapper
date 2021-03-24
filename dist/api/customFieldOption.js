"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomFieldOption = void 0;
var CustomFieldOption = /** @class */ (function () {
    function CustomFieldOption(context) {
        this.prefix = 'customFieldOption';
        this.context = context;
    }
    CustomFieldOption.prototype.getCustomFieldOption = function (params, callback) {
        var endpoint = this.prefix + "/" + params.id;
        var options = {
            uri: this.context.makeUrl(endpoint, 'api'),
            method: 'GET',
            json: true,
            followAllRedirects: true
        };
        return this.context.sendRequest(options, callback);
    };
    return CustomFieldOption;
}());
exports.CustomFieldOption = CustomFieldOption;
