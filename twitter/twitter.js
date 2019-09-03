// const crypto = require('crypto');
const querystring = require('querystring');
const {
  TWITTER_ACCESS_TOKEN_URL,
  TWITTER_REQUEST_TOKEN_URL,
  TWITTER_OAUTH_URL,
  DEFAULT_HEADERS,
} = require('../constants');
const generateHeaders = require('../heplers/oauthHeaders');
const { twitterValidators } = require('../heplers/validators');


/**
 * @constructor TwitterLogin
 * @param {Object} params
 * @description Initialize the Twitter Auth Util Object
 *
 */
function TwitterLogin(params) {
  twitterValidators.validConsumerParams(params);

  const { consumerKey, consumerSecret, callbackUrl } = params;

  this.consumerKey = consumerKey;
  this.consumerSecret = consumerSecret;
  this.callbackUrl = callbackUrl;
  this.client = generateHeaders({ consumerKey, consumerSecret});
}

const TL = TwitterLogin.prototype;

/**
 * @function getHeaders
 * @param {Object} reqData
 * @description generate oauth compatible headers
 * @return
 */
TL.getHeaders = function(reqData) {
  const payload = this.client.authorize(reqData);
  return this.client.toHeader(payload);
};


/**
 * @function getRequestToken
 * @description get a request token from Twitter API
 * @return
 */
TL.getRequestToken = async function() {
  const payload = {};

  if (this.callbackUrl) payload = { oauth_callback: this.callbackUrl };
  const url = `${TWITTER_REQUEST_TOKEN_URL}?${querystring.stringify(payload)}`;
  const headers = this.getHeaders(payload);

  const request = await fetch(url, { method: 'POST', headers: { ...DEFAULT_HEADERS, ...headers } });
  // request.text() vs request.json()
};


/**
 * @function getAccessToken
 * @description get an access token from Twitter API
 * @return
 */
TL.getAccessToken = async function() {
  const payload = {};

  const url = `${TWITTER_ACCESS_TOKEN_URL}?${querystring.stringify(payload)}`;
  const headers = this.getHeaders(payload);

  const request = await fetch(url, { method: 'POST', headers: { ...DEFAULT_HEADERS, ...headers } });
  // request.text() vs request.json()
};


module.exports = TwitterLogin;
