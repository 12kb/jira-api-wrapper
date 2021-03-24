"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Board = void 0;
var Board = /** @class */ (function () {
    function Board(context) {
        this.prefix = 'board';
        this.context = context;
    }
    Board.prototype.getAllBoards = function (params, callback) {
        var endpoint = this.prefix;
        params = params || {};
        var options = {
            uri: this.context.makeUrl(endpoint, 'agile'),
            method: 'GET',
            json: true,
            followAllRedirects: true,
            qs: {
                startAt: params.startAt,
                maxResults: params.maxResults,
                type: params.type,
                name: params.name,
                projectKeyOrId: params.projectKeyOrId,
                accountIdLocation: params.accountIdLocation,
                userkeyLocation: params.userkeyLocation,
                usernameLocation: params.usernameLocation,
                projectLocation: params.projectLocation,
                includePrivate: params.includePrivate,
                negateLocationFiltering: params.negateLocationFiltering,
                orderBy: params.orderBy,
                expand: params.expand
            }
        };
        return this.context.sendRequest(options, callback);
    };
    Board.prototype.createBoard = function (params, callback) {
        var endpoint = this.prefix;
        params = params || {};
        var options = {
            uri: this.context.makeUrl(endpoint, 'agile'),
            method: 'POST',
            json: true,
            followAllRedirects: true,
            body: {
                name: params.name,
                type: params.type,
                filterId: params.filterId,
                location: params.location
            }
        };
        return this.context.sendRequest(options, callback);
    };
    Board.prototype.getBoard = function (params, callback) {
        var endpoint = this.prefix + "/" + params.boardId;
        var options = {
            uri: this.context.makeUrl(endpoint, 'agile'),
            method: 'GET',
            json: true,
            followAllRedirects: true
        };
        return this.context.sendRequest(options, callback);
    };
    Board.prototype.deleteBoard = function (params, callback) {
        var endpoint = this.prefix + "/" + params.boardId;
        var options = {
            uri: this.context.makeUrl(endpoint, 'agile'),
            method: 'DELETE',
            json: true,
            followAllRedirects: true
        };
        return this.context.sendRequest(options, callback);
    };
    Board.prototype.getIssuesForBacklog = function (params, callback) {
        var endpoint = this.prefix + "/" + params.boardId + "/backlog";
        var options = {
            uri: this.context.makeUrl(endpoint, 'agile'),
            method: 'GET',
            json: true,
            followAllRedirects: true,
            qs: {
                startAt: params.startAt,
                maxResults: params.maxResults,
                jql: params.jql,
                validateQuery: params.validateQuery,
                fields: params.fields ? params.fields.join(',') : undefined,
                expand: params.expand
            }
        };
        return this.context.sendRequest(options, callback);
    };
    Board.prototype.getConfiguration = function (params, callback) {
        var endpoint = this.prefix + "/" + params.boardId + "/configuration";
        var options = {
            uri: this.context.makeUrl(endpoint, 'agile'),
            method: 'GET',
            json: true,
            followAllRedirects: true
        };
        return this.context.sendRequest(options, callback);
    };
    Board.prototype.getEpics = function (params, callback) {
        var endpoint = this.prefix + "/" + params.boardId + "/epic";
        var options = {
            uri: this.context.makeUrl(endpoint, 'agile'),
            method: 'GET',
            json: true,
            followAllRedirects: true,
            qs: {
                startAt: params.startAt,
                maxResults: params.maxResults,
                done: params.done
            }
        };
        return this.context.sendRequest(options, callback);
    };
    Board.prototype.getIssuesWithoutEpic = function (params, callback) {
        var endpoint = this.prefix + "/" + params.boardId + "/epic/none/issue";
        var options = {
            uri: this.context.makeUrl(endpoint, 'agile'),
            method: 'GET',
            json: true,
            followAllRedirects: true,
            qs: {
                startAt: params.startAt,
                maxResults: params.maxResults,
                jql: params.jql,
                validateQuery: params.validateQuery,
                fields: params.fields ? params.fields.join(',') : undefined,
                expand: params.expand
            }
        };
        return this.context.sendRequest(options, callback);
    };
    Board.prototype.getIssuesForEpic = function (params, callback) {
        var endpoint = this.prefix + "/" + params.boardId + "/epic/" + params.epicId + "/issue";
        var options = {
            uri: this.context.makeUrl(endpoint, 'agile'),
            method: 'GET',
            json: true,
            followAllRedirects: true,
            qs: {
                startAt: params.startAt,
                maxResults: params.maxResults,
                jql: params.jql,
                validateQuery: params.validateQuery,
                fields: params.fields ? params.fields.join(',') : undefined,
                expand: params.expand
            }
        };
        return this.context.sendRequest(options, callback);
    };
    Board.prototype.getFeaturesForBoard = function (params, callback) {
        var endpoint = this.prefix + "/" + params.boardId + "/features";
        var options = {
            uri: this.context.makeUrl(endpoint, 'agile'),
            method: 'GET',
            json: true,
            followAllRedirects: true
        };
        return this.context.sendRequest(options, callback);
    };
    Board.prototype.toggleFeatures = function (params, callback) {
        var endpoint = this.prefix + "/" + params.boardIdPath + "/features";
        var options = {
            uri: this.context.makeUrl(endpoint, 'agile'),
            method: 'PUT',
            json: true,
            followAllRedirects: true,
            body: {
                boardId: params.boardId,
                feature: params.feature,
                enabling: params.enabling
            }
        };
        return this.context.sendRequest(options, callback);
    };
    Board.prototype.getIssuesForBoard = function (params, callback) {
        var endpoint = this.prefix + "/" + params.boardId + "/issue";
        var options = {
            uri: this.context.makeUrl(endpoint, 'agile'),
            method: 'GET',
            json: true,
            followAllRedirects: true,
            qs: {
                startAt: params.startAt,
                maxResults: params.maxResults,
                jql: params.jql,
                validateQuery: params.validateQuery,
                fields: params.fields ? params.fields.join(',') : undefined,
                expand: params.expand
            }
        };
        return this.context.sendRequest(options, callback);
    };
    Board.prototype.moveIssuesToBoard = function (params, callback) {
        var endpoint = this.prefix + "/" + params.boardId + "/issue";
        var options = {
            uri: this.context.makeUrl(endpoint, 'agile'),
            method: 'GET',
            json: true,
            followAllRedirects: true,
            qs: {
                issues: params.issues ? params.issues.join(',') : undefined,
                rankBeforeIssue: params.rankBeforeIssue,
                rankAfterIssue: params.rankAfterIssue,
                rankCustomFieldId: params.rankCustomFieldId
            }
        };
        return this.context.sendRequest(options, callback);
    };
    Board.prototype.getProjects = function (params, callback) {
        var endpoint = this.prefix + "/" + params.boardId + "/project";
        var options = {
            uri: this.context.makeUrl(endpoint, 'agile'),
            method: 'GET',
            json: true,
            followAllRedirects: true,
            qs: {
                startAt: params.startAt,
                maxResults: params.maxResults
            }
        };
        return this.context.sendRequest(options, callback);
    };
    Board.prototype.getProjectsFull = function (params, callback) {
        var endpoint = this.prefix + "/" + params.boardId + "/project/full";
        var options = {
            uri: this.context.makeUrl(endpoint, 'agile'),
            method: 'GET',
            json: true,
            followAllRedirects: true
        };
        return this.context.sendRequest(options, callback);
    };
    Board.prototype.getBoardPropertyKeys = function (params, callback) {
        var endpoint = this.prefix + "/" + params.boardId + "/properties";
        var options = {
            uri: this.context.makeUrl(endpoint, 'agile'),
            method: 'GET',
            json: true,
            followAllRedirects: true
        };
        return this.context.sendRequest(options, callback);
    };
    Board.prototype.getBoardProperty = function (params, callback) {
        var endpoint = this.prefix + "/" + params.boardId + "/properties/" + params.propertyKey;
        var options = {
            uri: this.context.makeUrl(endpoint, 'agile'),
            method: 'GET',
            json: true,
            followAllRedirects: true
        };
        return this.context.sendRequest(options, callback);
    };
    Board.prototype.setBoardProperty = function (params, callback) {
        var endpoint = this.prefix + "/" + params.boardId + "/properties/" + params.propertyKey;
        var options = {
            uri: this.context.makeUrl(endpoint, 'agile'),
            method: 'PUT',
            json: true,
            followAllRedirects: true
        };
        return this.context.sendRequest(options, callback);
    };
    Board.prototype.deleteBoardProperty = function (params, callback) {
        var endpoint = this.prefix + "/" + params.boardId + "/properties/" + params.propertyKey;
        var options = {
            uri: this.context.makeUrl(endpoint, 'agile'),
            method: 'DELETE',
            json: true,
            followAllRedirects: true
        };
        return this.context.sendRequest(options, callback);
    };
    Board.prototype.getAllQuickFilters = function (params, callback) {
        var endpoint = this.prefix + "/" + params.boardId + "/quickfilter";
        var options = {
            uri: this.context.makeUrl(endpoint, 'agile'),
            method: 'GET',
            json: true,
            followAllRedirects: true,
            qs: {
                startAt: params.startAt,
                maxResults: params.maxResults
            }
        };
        return this.context.sendRequest(options, callback);
    };
    Board.prototype.getQuickFilter = function (params, callback) {
        var endpoint = this.prefix + "/" + params.boardId + "/quickfilter/" + params.quickFilterId;
        var options = {
            uri: this.context.makeUrl(endpoint, 'agile'),
            method: 'GET',
            json: true,
            followAllRedirects: true,
        };
        return this.context.sendRequest(options, callback);
    };
    Board.prototype.getReportsForBoard = function (params, callback) {
        var endpoint = this.prefix + "/" + params.boardId + "/reports";
        var options = {
            uri: this.context.makeUrl(endpoint, 'agile'),
            method: 'GET',
            json: true,
            followAllRedirects: true,
        };
        return this.context.sendRequest(options, callback);
    };
    Board.prototype.getAllSprints = function (params, callback) {
        var endpoint = this.prefix + "/" + params.boardId + "/sprint";
        var options = {
            uri: this.context.makeUrl(endpoint, 'agile'),
            method: 'GET',
            json: true,
            followAllRedirects: true,
            qs: {
                startAt: params.startAt,
                maxResults: params.maxResults,
                state: params.state
            }
        };
        return this.context.sendRequest(options, callback);
    };
    Board.prototype.getIssuesForSprint = function (params, callback) {
        var endpoint = this.prefix + "/" + params.boardId + "/sprint/" + params.sprintId + "/issue";
        var options = {
            uri: this.context.makeUrl(endpoint, 'agile'),
            method: 'GET',
            json: true,
            followAllRedirects: true,
            qs: {
                startAt: params.startAt,
                maxResults: params.maxResults,
                jql: params.jql,
                validateQuery: params.validateQuery,
                fields: params.fields ? params.fields.join(',') : undefined,
                expand: params.expand
            }
        };
        return this.context.sendRequest(options, callback);
    };
    Board.prototype.getAllVersions = function (params, callback) {
        var endpoint = this.prefix + "/" + params.boardId + "/version";
        var options = {
            uri: this.context.makeUrl(endpoint, 'agile'),
            method: 'GET',
            json: true,
            followAllRedirects: true,
            qs: {
                startAt: params.startAt,
                maxResults: params.maxResults,
                released: params.released
            }
        };
        return this.context.sendRequest(options, callback);
    };
    return Board;
}());
exports.Board = Board;
