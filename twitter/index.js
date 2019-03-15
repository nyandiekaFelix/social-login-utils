import * as crypto from 'crypto';
import OAuth from 'oauth-1.0a';
import {
  TWITTER_ACCESS_TOKEN_URL,
  TWITTER_REQ_TOKEN_URL,
  TWITTER_OAUTH_URL
} from '../constants';

import { twitterValidators } from '../heplers/validators';


function oauthHeaders({ consumerKey: key, consumerSecret: secret }) {
  return new OAuth({
    consumer: { key, secret },
    signature_method: 'HMAC-SHA!',
    hash_function(baseStr, key) {
      return crypto.createHmac('sha1', key).update(baseStr).digest('base64');
    }
  })
}


function getOAuthToken() {}


function getUserToken() {}


export default function twitterLogin(params) {}
