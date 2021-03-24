"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Issue = void 0;
var Issue = /** @class */ (function () {
    function Issue(context) {
        this.prefix = 'issue';
        this.context = context;
    }
    // Agile API
    Issue.prototype.rankIssues = function (params, callback) {
        var endpoint = this.prefix + "/rank";
        params = params || {};
        var options = {
            uri: this.context.makeUrl(endpoint, 'agile'),
            method: 'PUT',
            json: true,
            followAllRedirects: true,
            body: {
                issues: params.issues,
                rankBeforeIssue: params.rankBeforeIssue,
                rankAfterIssue: params.rankAfterIssue,
                rankCustomFieldId: params.rankCustomFieldId
            }
        };
        return this.context.sendRequest(options, callback);
    };
    Issue.prototype.getIssueEstimationForBoard = function (params, callback) {
        var endpoint = this.prefix + "/" + params.issueIdOrKey + "/estimation";
        var options = {
            uri: this.context.makeUrl(endpoint, 'agile'),
            method: 'GET',
            json: true,
            followAllRedirects: true,
            qs: {
                boardId: params.boardId
            }
        };
        return this.context.sendRequest(options, callback);
    };
    Issue.prototype.estimateIssueForBoard = function (params, callback) {
        var endpoint = this.prefix + "/" + params.issueIdOrKey + "/estimation";
        var options = {
            uri: this.context.makeUrl(endpoint, 'agile'),
            method: 'PUT',
            json: true,
            followAllRedirects: true,
            qs: {
                boardId: params.boardId
            },
            body: {
                value: params.value
            }
        };
        return this.context.sendRequest(options, callback);
    };
    // Agile and REST API
    Issue.prototype.getIssue = function (params, callback) {
        var endpoint = this.prefix + "/" + params.issueIdOrKey;
        var options = {
            uri: this.context.makeUrl(endpoint, params.agile ? 'agile' : 'api'),
            method: 'GET',
            json: true,
            followAllRedirects: true,
            qs: {
                fields: params.fields ? params.fields.join(',') : undefined,
                fieldsByKeys: params.fieldsByKeys,
                expand: params.expand,
                properties: params.properties ? params.properties.join(',') : undefined,
                updateHistory: params.updateHistory
            }
        };
        return this.context.sendRequest(options, callback);
    };
    // REST API
    Issue.prototype.createIssue = function (params, callback) {
        var endpoint = this.prefix;
        params = params || {};
        var options = {
            uri: this.context.makeUrl(endpoint, 'api'),
            method: 'POST',
            json: true,
            followAllRedirects: true,
            qs: {
                updateHistory: params.updateHistory
            },
            body: {
                transition: params.transition,
                fields: params.fields,
                update: params.update,
                historyMetadata: params.historyMetadata,
                properties: params.properties
            }
        };
        return this.context.sendRequest(options, callback);
    };
    Issue.prototype.bulkIssueCreate = function (params, callback) {
        var endpoint = this.prefix + "/bulk";
        params = params || {};
        var options = {
            uri: this.context.makeUrl(endpoint, 'api'),
            method: 'POST',
            json: true,
            followAllRedirects: true,
            body: {
                issueUpdates: params.issueUpdates
            }
        };
        return this.context.sendRequest(options, callback);
    };
    Issue.prototype.getCreateIssueMetadata = function (params, callback) {
        var endpoint = this.prefix + "/createmeta";
        params = params || {};
        var options = {
            uri: this.context.makeUrl(endpoint, 'api'),
            method: 'GET',
            json: true,
            followAllRedirects: true,
            qs: {
                projectIds: params.projectIds ? params.projectIds.join(',') : undefined,
                projectKeys: params.projectKeys ? params.projectKeys.join(',') : undefined,
                issuetypeIds: params.issuetypeIds ? params.issuetypeIds.join(',') : undefined,
                issuetypeNames: params.issuetypeNames ? params.issuetypeNames.join(',') : undefined,
                expand: params.expand
            }
        };
        return this.context.sendRequest(options, callback);
    };
    Issue.prototype.getIssuePickerSuggestions = function (params, callback) {
        var endpoint = this.prefix + "/picker";
        params = params || {};
        var options = {
            uri: this.context.makeUrl(endpoint, 'api'),
            method: 'GET',
            json: true,
            followAllRedirects: true,
            qs: {
                query: params.query,
                currentJQL: params.currentJQL,
                currentIssueKey: params.currentIssueKey,
                currentProjectId: params.currentProjectId,
                showSubTasks: params.showSubTasks,
                showSubTaskParent: params.showSubTaskParent
            }
        };
        return this.context.sendRequest(options, callback);
    };
    Issue.prototype.bulkSetIssueProperty = function (params, callback) {
        var endpoint = this.prefix + "/properties/" + params.propertyKey;
        params = params || {};
        var options = {
            uri: this.context.makeUrl(endpoint, 'api'),
            method: 'PUT',
            json: true,
            followAllRedirects: true,
            body: {
                value: params.value,
                filter: params.filter
            }
        };
        return this.context.sendRequest(options, callback);
    };
    Issue.prototype.bulkDeleteIssueProperty = function (params, callback) {
        var endpoint = this.prefix + "/properties/" + params.propertyKey;
        params = params || {};
        var options = {
            uri: this.context.makeUrl(endpoint, 'api'),
            method: 'DELETE',
            json: true,
            followAllRedirects: true,
            body: {
                entityIds: params.entityIds,
                currentValue: params.currentValue
            }
        };
        return this.context.sendRequest(options, callback);
    };
    Issue.prototype.editIssue = function (params, callback) {
        var endpoint = this.prefix + "/" + params.issueIdOrKey;
        var options = {
            uri: this.context.makeUrl(endpoint, 'api'),
            method: 'PUT',
            json: true,
            followAllRedirects: true,
            qs: {
                notifyUsers: params.notifyUsers,
                overrideScreenSecurity: params.overrideScreenSecurity,
                overrideEditableFlag: params.overrideEditableFlag
            },
            body: {
                transition: params.transition,
                fields: params.fields,
                update: params.update,
                historyMetadata: params.historyMetadata,
                properties: params.properties
            }
        };
        return this.context.sendRequest(options, callback);
    };
    Issue.prototype.deleteIssue = function (params, callback) {
        var endpoint = this.prefix + "/" + params.issueIdOrKey;
        var options = {
            uri: this.context.makeUrl(endpoint, 'api'),
            method: 'DELETE',
            json: true,
            followAllRedirects: true,
            qs: {
                deleteSubtasks: params.deleteSubtasks
            }
        };
        return this.context.sendRequest(options, callback);
    };
    Issue.prototype.assignIssue = function (params, callback) {
        var endpoint = this.prefix + "/" + params.issueIdOrKey + "/assignee";
        var options = {
            uri: this.context.makeUrl(endpoint, 'api'),
            method: 'PUT',
            json: true,
            followAllRedirects: true,
            body: {
                key: params.key,
                accountId: params.accountId,
                name: params.name
            }
        };
        return this.context.sendRequest(options, callback);
    };
    Issue.prototype.addAttachment = function (params, callback) {
        var endpoint = this.prefix + "/" + params.issueIdOrKey + "/attachments";
        var options = {
            uri: this.context.makeUrl(endpoint, 'api'),
            method: 'POST',
            json: true,
            followAllRedirects: true,
            body: params.body
        };
        return this.context.sendRequest(options, callback);
    };
    Issue.prototype.getChangeLog = function (params, callback) {
        var endpoint = this.prefix + "/" + params.issueIdOrKey + "/changelog";
        var options = {
            uri: this.context.makeUrl(endpoint, 'api'),
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
    Issue.prototype.getComments = function (params, callback) {
        var endpoint = this.prefix + "/" + params.issueIdOrKey + "/comment";
        var options = {
            uri: this.context.makeUrl(endpoint, 'api'),
            method: 'GET',
            json: true,
            followAllRedirects: true,
            qs: {
                startAt: params.startAt,
                maxResults: params.maxResults,
                orderBy: params.orderBy,
                expand: params.expand
            }
        };
        return this.context.sendRequest(options, callback);
    };
    Issue.prototype.addComment = function (params, callback) {
        var endpoint = this.prefix + "/" + params.issueIdOrKey + "/comment";
        var options = {
            uri: this.context.makeUrl(endpoint, 'api'),
            method: 'POST',
            json: true,
            followAllRedirects: true,
            qs: {
                expand: params.expand
            },
            body: {
                body: params.body,
                visibility: params.visibility,
                jsdPublic: params.jsdPublic,
                properties: params.properties
            }
        };
        return this.context.sendRequest(options, callback);
    };
    Issue.prototype.getComment = function (params, callback) {
        var endpoint = this.prefix + "/" + params.issueIdOrKey + "/comment/" + params.id;
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
    Issue.prototype.updateComment = function (params, callback) {
        var endpoint = this.prefix + "/" + params.issueIdOrKey + "/comment/" + params.id;
        var options = {
            uri: this.context.makeUrl(endpoint, 'api'),
            method: 'PUT',
            json: true,
            followAllRedirects: true,
            qs: {
                expand: params.expand
            },
            body: {
                body: params.body,
                visibility: params.visibility,
                jsdPublic: params.jsdPublic,
                properties: params.properties
            }
        };
        return this.context.sendRequest(options, callback);
    };
    Issue.prototype.deleteComment = function (params, callback) {
        var endpoint = this.prefix + "/" + params.issueIdOrKey + "/comment/" + params.id;
        var options = {
            uri: this.context.makeUrl(endpoint, 'api'),
            method: 'DELETE',
            json: true,
            followAllRedirects: true
        };
        return this.context.sendRequest(options, callback);
    };
    Issue.prototype.getEditIssueMetadata = function (params, callback) {
        var endpoint = this.prefix + "/" + params.issueIdOrKey + "/editmeta";
        var options = {
            uri: this.context.makeUrl(endpoint, 'api'),
            method: 'GET',
            json: true,
            followAllRedirects: true,
            qs: {
                overrideScreenSecurity: params.overrideScreenSecurity,
                overrideEditableFlag: params.overrideEditableFlag
            }
        };
        return this.context.sendRequest(options, callback);
    };
    Issue.prototype.sendNotificationForIssue = function (params, callback) {
        var endpoint = this.prefix + "/" + params.issueIdOrKey + "/notify";
        var options = {
            uri: this.context.makeUrl(endpoint, 'api'),
            method: 'POST',
            json: true,
            followAllRedirects: true,
            body: {
                subject: params.subject,
                textBody: params.textBody,
                htmlBody: params.htmlBody,
                to: params.to,
                restrict: params.restrict
            }
        };
        return this.context.sendRequest(options, callback);
    };
    Issue.prototype.getIssuePropertyKeys = function (params, callback) {
        var endpoint = this.prefix + "/" + params.issueIdOrKey + "/properties";
        var options = {
            uri: this.context.makeUrl(endpoint, 'api'),
            method: 'GET',
            json: true,
            followAllRedirects: true
        };
        return this.context.sendRequest(options, callback);
    };
    Issue.prototype.getIssueProperty = function (params, callback) {
        var endpoint = this.prefix + "/" + params.issueIdOrKey + "/properties/" + params.propertyKey;
        var options = {
            uri: this.context.makeUrl(endpoint, 'api'),
            method: 'GET',
            json: true,
            followAllRedirects: true
        };
        return this.context.sendRequest(options, callback);
    };
    Issue.prototype.setIssueProperty = function (params, callback) {
        var endpoint = this.prefix + "/" + params.issueIdOrKey + "/properties/" + params.propertyKey;
        var options = {
            uri: this.context.makeUrl(endpoint, 'api'),
            method: 'PUT',
            json: true,
            followAllRedirects: true,
            body: params.body
        };
        return this.context.sendRequest(options, callback);
    };
    Issue.prototype.deleteIssueProperty = function (params, callback) {
        var endpoint = this.prefix + "/" + params.issueIdOrKey + "/properties/" + params.propertyKey;
        var options = {
            uri: this.context.makeUrl(endpoint, 'api'),
            method: 'DELETE',
            json: true,
            followAllRedirects: true
        };
        return this.context.sendRequest(options, callback);
    };
    Issue.prototype.getRemoteIssueLinks = function (params, callback) {
        var endpoint = this.prefix + "/" + params.issueIdOrKey + "/remotelink";
        var options = {
            uri: this.context.makeUrl(endpoint, 'api'),
            method: 'GET',
            json: true,
            followAllRedirects: true,
            qs: {
                globalId: params.globalId
            }
        };
        return this.context.sendRequest(options, callback);
    };
    Issue.prototype.createOrUpdateRemoteIssueLink = function (params, callback) {
        var endpoint = this.prefix + "/" + params.issueIdOrKey + "/remotelink";
        var options = {
            uri: this.context.makeUrl(endpoint, 'api'),
            method: 'POST',
            json: true,
            followAllRedirects: true,
            body: {
                globalId: params.globalId,
                application: params.application,
                relationship: params.relationship,
                object: params.object
            }
        };
        return this.context.sendRequest(options, callback);
    };
    Issue.prototype.deleteRemoteIssueLinkByGlobalId = function (params, callback) {
        var endpoint = this.prefix + "/" + params.issueIdOrKey + "/remotelink";
        var options = {
            uri: this.context.makeUrl(endpoint, 'api'),
            method: 'DELETE',
            json: true,
            followAllRedirects: true,
            qs: {
                globalId: params.globalId
            }
        };
        return this.context.sendRequest(options, callback);
    };
    Issue.prototype.getRemoteIssueLinkById = function (params, callback) {
        var endpoint = this.prefix + "/" + params.issueIdOrKey + "/remotelink/" + params.linkId;
        var options = {
            uri: this.context.makeUrl(endpoint, 'api'),
            method: 'GET',
            json: true,
            followAllRedirects: true
        };
        return this.context.sendRequest(options, callback);
    };
    Issue.prototype.updateRemoteIssueLink = function (params, callback) {
        var endpoint = this.prefix + "/" + params.issueIdOrKey + "/remotelink/" + params.linkId;
        var options = {
            uri: this.context.makeUrl(endpoint, 'api'),
            method: 'PUT',
            json: true,
            followAllRedirects: true,
            body: {
                globalId: params.globalId,
                application: params.application,
                relationship: params.relationship,
                object: params.object
            }
        };
        return this.context.sendRequest(options, callback);
    };
    Issue.prototype.deleteRemoteIssueLinkById = function (params, callback) {
        var endpoint = this.prefix + "/" + params.issueIdOrKey + "/remotelink/" + params.linkId;
        var options = {
            uri: this.context.makeUrl(endpoint, 'api'),
            method: 'DELETE',
            json: true,
            followAllRedirects: true
        };
        return this.context.sendRequest(options, callback);
    };
    Issue.prototype.getTransitions = function (params, callback) {
        var endpoint = this.prefix + "/" + params.issueIdOrKey + "/transitions";
        var options = {
            uri: this.context.makeUrl(endpoint, 'api'),
            method: 'GET',
            json: true,
            followAllRedirects: true,
            qs: {
                expand: params.expand,
                transitionId: params.transitionId,
                skipRemoteOnlyCondition: params.skipRemoteOnlyCondition
            }
        };
        return this.context.sendRequest(options, callback);
    };
    Issue.prototype.transitionIssue = function (params, callback) {
        var endpoint = this.prefix + "/" + params.issueIdOrKey + "/transitions";
        var options = {
            uri: this.context.makeUrl(endpoint, 'api'),
            method: 'POST',
            json: true,
            followAllRedirects: true,
            body: {
                transition: params.transition,
                fields: params.fields,
                update: params.update,
                historyMetadata: params.historyMetadata,
                properties: params.properties
            }
        };
        return this.context.sendRequest(options, callback);
    };
    Issue.prototype.getVotes = function (params, callback) {
        var endpoint = this.prefix + "/" + params.issueIdOrKey + "/votes";
        var options = {
            uri: this.context.makeUrl(endpoint, 'api'),
            method: 'GET',
            json: true,
            followAllRedirects: true
        };
        return this.context.sendRequest(options, callback);
    };
    Issue.prototype.addVote = function (params, callback) {
        var endpoint = this.prefix + "/" + params.issueIdOrKey + "/votes";
        var options = {
            uri: this.context.makeUrl(endpoint, 'api'),
            method: 'POST',
            json: true,
            followAllRedirects: true
        };
        return this.context.sendRequest(options, callback);
    };
    Issue.prototype.deleteVote = function (params, callback) {
        var endpoint = this.prefix + "/" + params.issueIdOrKey + "/votes";
        var options = {
            uri: this.context.makeUrl(endpoint, 'api'),
            method: 'DELETE',
            json: true,
            followAllRedirects: true
        };
        return this.context.sendRequest(options, callback);
    };
    Issue.prototype.getIssueWatchers = function (params, callback) {
        var endpoint = this.prefix + "/" + params.issueIdOrKey + "/watchers";
        var options = {
            uri: this.context.makeUrl(endpoint, 'api'),
            method: 'GET',
            json: true,
            followAllRedirects: true
        };
        return this.context.sendRequest(options, callback);
    };
    Issue.prototype.addWatcher = function (params, callback) {
        var endpoint = this.prefix + "/" + params.issueIdOrKey + "/watchers";
        var options = {
            uri: this.context.makeUrl(endpoint, 'api'),
            method: 'POST',
            json: true,
            followAllRedirects: true
        };
        return this.context.sendRequest(options, callback);
    };
    Issue.prototype.deleteWatcher = function (params, callback) {
        var endpoint = this.prefix + "/" + params.issueIdOrKey + "/watchers";
        var options = {
            uri: this.context.makeUrl(endpoint, 'api'),
            method: 'DELETE',
            json: true,
            followAllRedirects: true,
            qs: {
                username: params.username,
                accountId: params.accountId
            }
        };
        return this.context.sendRequest(options, callback);
    };
    Issue.prototype.getIssueWorklogs = function (params, callback) {
        var endpoint = this.prefix + "/" + params.issueIdOrKey + "/worklog/" + params.id;
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
    Issue.prototype.addWorklog = function (params, callback) {
        var endpoint = this.prefix + "/" + params.issueIdOrKey + "/worklog";
        var options = {
            uri: this.context.makeUrl(endpoint, 'api'),
            method: 'POST',
            json: true,
            followAllRedirects: true,
            qs: {
                notifyUsers: params.notifyUsers,
                adjustEstimate: params.adjustEstimate,
                newEstimate: params.newEstimate,
                reduceBy: params.reduceBy,
                expand: params.expand,
                overrideEditableFlag: params.overrideEditableFlag
            },
            body: {
                author: params.author,
                updateAuthor: params.updateAuthor,
                comment: params.comment,
                visibility: params.visibility,
                started: params.started,
                timeSpent: params.timeSpent,
                timeSpentSeconds: params.timeSpentSeconds,
                properties: params.properties
            }
        };
        return this.context.sendRequest(options, callback);
    };
    Issue.prototype.getWorklog = function (params, callback) {
        var endpoint = this.prefix + "/" + params.issueIdOrKey + "/worklog/" + params.id;
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
    Issue.prototype.updateWorklog = function (params, callback) {
        var endpoint = this.prefix + "/" + params.issueIdOrKey + "/worklog/" + params.id;
        var options = {
            uri: this.context.makeUrl(endpoint, 'api'),
            method: 'PUT',
            json: true,
            followAllRedirects: true,
            qs: {
                notifyUsers: params.notifyUsers,
                adjustEstimate: params.adjustEstimate,
                newEstimate: params.newEstimate,
                expand: params.expand,
                overrideEditableFlag: params.overrideEditableFlag
            },
            body: {
                author: params.author,
                updateAuthor: params.updateAuthor,
                comment: params.comment,
                visibility: params.visibility,
                started: params.started,
                timeSpent: params.timeSpent,
                timeSpentSeconds: params.timeSpentSeconds,
                properties: params.properties
            }
        };
        return this.context.sendRequest(options, callback);
    };
    Issue.prototype.deleteWorklog = function (params, callback) {
        var endpoint = this.prefix + "/" + params.issueIdOrKey + "/worklog/" + params.id;
        var options = {
            uri: this.context.makeUrl(endpoint, 'api'),
            method: 'DELETE',
            json: true,
            followAllRedirects: true,
            qs: {
                notifyUsers: params.notifyUsers,
                adjustEstimate: params.adjustEstimate,
                newEstimate: params.newEstimate,
                increaseBy: params.increaseBy,
                overrideEditableFlag: params.overrideEditableFlag
            }
        };
        return this.context.sendRequest(options, callback);
    };
    Issue.prototype.getWorklogPropertyKeys = function (params, callback) {
        var endpoint = this.prefix + "/" + params.issueIdOrKey + "/worklog/" + params.worklogId + "/properties";
        var options = {
            uri: this.context.makeUrl(endpoint, 'api'),
            method: 'GET',
            json: true,
            followAllRedirects: true
        };
        return this.context.sendRequest(options, callback);
    };
    Issue.prototype.getWorklogProperty = function (params, callback) {
        var endpoint = this.prefix + "/" + params.issueIdOrKey + "/worklog/" + params.worklogId + "/properties/" + params.propertyKey;
        var options = {
            uri: this.context.makeUrl(endpoint, 'api'),
            method: 'GET',
            json: true,
            followAllRedirects: true
        };
        return this.context.sendRequest(options, callback);
    };
    Issue.prototype.setWorklogProperty = function (params, callback) {
        var endpoint = this.prefix + "/" + params.issueIdOrKey + "/worklog/" + params.worklogId + "/properties/" + params.propertyKey;
        var options = {
            uri: this.context.makeUrl(endpoint, 'api'),
            method: 'PUT',
            json: true,
            followAllRedirects: true,
            body: params.body
        };
        return this.context.sendRequest(options, callback);
    };
    Issue.prototype.deleteWorklogProperty = function (params, callback) {
        var endpoint = this.prefix + "/" + params.issueIdOrKey + "/worklog/" + params.worklogId + "/properties/" + params.propertyKey;
        var options = {
            uri: this.context.makeUrl(endpoint, 'api'),
            method: 'DELETE',
            json: true,
            followAllRedirects: true
        };
        return this.context.sendRequest(options, callback);
    };
    return Issue;
}());
exports.Issue = Issue;
