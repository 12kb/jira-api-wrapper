"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.swapRequestTokenWithAccessToken = exports.getAuthorizeURL = void 0;
var url = __importStar(require("url"));
var errors = __importStar(require("./errors"));
var Oauth = __importStar(require("oauth"));
exports.getAuthorizeURL = function (config, callback) {
    var prefix = config.pathPrefix ? config.pathPrefix : '';
    var AUTH_TOKEN_APPEND = '/oauth/authorize';
    var SERVLET_BASE_URL = prefix + '/plugins/servlet';
    var authURL = url.format({
        protocol: config.protocol || 'https',
        hostname: config.host,
        port: config.port,
        pathname: SERVLET_BASE_URL + AUTH_TOKEN_APPEND
    });
    var oauth = generateOAuthObject(config);
    oauth.getOAuthRequestToken(function (err, token, tokenSecret) {
        if (err) {
            return callback(err);
        }
        return callback(null, { url: authURL + "?oauth_token=" + token, token: token, token_secret: tokenSecret });
    });
};
exports.swapRequestTokenWithAccessToken = function (config, callback) {
    if (!config.oauth.verifier) {
        throw new Error(errors.NO_VERIFIER_ERROR);
    }
    else if (!config.oauth) {
        throw new Error(errors.NO_OAUTH_ERROR);
    }
    else if (!config.oauth.token) {
        throw new Error(errors.NO_TOKEN);
    }
    else if (!config.oauth.tokenSecret) {
        throw new Error(errors.NO_TOKEN_SECRET);
    }
    var oauth = generateOAuthObject(config);
    var token = config.oauth.token;
    var secret = config.oauth.tokenSecret;
    var verifier = config.oauth.verifier;
    oauth.getOAuthAccessToken(token, secret, verifier, callback);
};
function generateOAuthObject(config) {
    var prefix = config.pathPrefix ? config.pathPrefix : '';
    var SERVLET_BASE_URL = prefix + '/plugins/servlet';
    var REQ_TOKEN_APPEND = '/oauth/request-token';
    var ACCESS_TOKEN_APPEND = '/oauth/access-token';
    var sig = 'RSA-SHA1';
    if (!config.host) {
        throw new Error(errors.NO_HOST_ERROR);
    }
    else if (!config.oauth.consumerKey) {
        throw new Error(errors.NO_CONSUMER_KEY_ERROR);
    }
    else if (!config.oauth.privateKey) {
        throw new Error(errors.NO_PRIVATE_KEY_ERROR);
    }
    var consumerKey = config.oauth.consumerKey;
    var privateKey = config.oauth.privateKey;
    var reqURL = url.format({
        protocol: config.protocol || 'https',
        hostname: config.host,
        port: config.port,
        pathname: SERVLET_BASE_URL + REQ_TOKEN_APPEND
    });
    var accessURL = url.format({
        protocol: config.protocol || 'https',
        hostname: config.host,
        port: config.port,
        pathname: SERVLET_BASE_URL + ACCESS_TOKEN_APPEND
    });
    var cb = config.oauth.callbackUrl ? config.oauth.callbackUrl : 'oob';
    return new Oauth.OAuth(reqURL, accessURL, consumerKey, privateKey, '1.0', cb, sig);
}
