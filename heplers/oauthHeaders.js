const OAuth = require('oauth-1.0a');

function generateHeaders({ consumerKey: key, consumerSecret: secret }) {
  return new OAuth({
    consumer: { key, secret },
    signature_method: 'HMAC-SHA1',
    hash_function(baseStr, key) {
      return crypto.createHmac('sha1', key).update(baseStr).digest('base64');
    }
  });
}

module.exports = generateHeaders;
