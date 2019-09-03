const TWITTER_OAUTH_URL = '';
const TWITTER_REQUEST_TOKEN_URL = 'https://api.twitter.com/request_token';
const TWITTER_ACCESS_TOKEN_URL = 'https://api.twitter.com/access_token';

const DEFAULT_HEADERS = {
  'Content-Type': 'application/json',
  Accept: 'application/json',
};

module.exports = {
  DEFAULT_HEADERS,
  TWITTER_ACCESS_TOKEN_URL,
  TWITTER_REQUEST_TOKEN_URL,
  TWITTER_OAUTH_URL
};
