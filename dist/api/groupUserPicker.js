"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupUserPicker = void 0;
var GroupUserPicker = /** @class */ (function () {
    function GroupUserPicker(context) {
        this.prefix = 'groupuserpicker';
        this.context = context;
    }
    GroupUserPicker.prototype.findUsersAndGroups = function (params, callback) {
        var endpoint = this.prefix;
        params = params || {};
        var options = {
            uri: this.context.makeUrl(endpoint, 'api'),
            method: 'GET',
            json: true,
            followAllRedirects: true,
            qs: {
                query: params.query,
                maxResults: params.maxResults,
                showAvatar: params.showAvatar,
                fieldId: params.fieldId,
                projectId: params.projectId,
                issueTypeId: params.issueTypeId,
                avatarSize: params.avatarSize,
                caseInsensitive: params.caseInsensitive,
                excludeConnectAddons: params.excludeConnectAddons
            }
        };
        return this.context.sendRequest(options, callback);
    };
    return GroupUserPicker;
}());
exports.GroupUserPicker = GroupUserPicker;
