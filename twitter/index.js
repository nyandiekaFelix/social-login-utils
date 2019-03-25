const crypto = require('crypto');
const {
  TWITTER_ACCESS_TOKEN_URL,
  TWITTER_REQ_TOKEN_URL,
  TWITTER_OAUTH_URL
} = require('../constants');
const generateHeaders = require('../heplers/oauthHeaders');
const { twitterValidators } = require('../heplers/validators');


function TwitterLogin(params) {
  twitterValidators.validConsumerParams(params);

  const { consumerKey, consumerSecret, callbackUrl } = params;

  this.consumerKey = consumerKey;
  this.consumerSecret = consumerSecret;
  this.callbackUrl = callbackUrl;
  this.oauthHeaders = generateHeaders({ consumerKey, consumerSecret});
}

const TL = TwitterLogin.prototype;

TL.getHeaders = function(reqData) {
  const payload = this.oauthHeaders.authorize(reqData);
  return this.oauthHeaders.toHeader(payload);
};


TL.getRequestToken = function() {
  const payload = {};
};


TL.getUserToken = function() {};


module.exports = TwitterLogin;
