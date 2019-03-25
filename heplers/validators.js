function validParams(params, requiredKeys = []) {
  const errors = [];

  requiredKeys.forEach(key => {
    if(!params[key]) errors.push(`You need to provide a value for '${key}'`);
  });

  if (errors.length) throw ({ errors });
}

const twitterValidators = {
  validConsumerParams(params) {
    validParams(params, ['consumerKey', 'consumerSecret', 'callbackUrl'])
  },
};
const facebookValidators = {};
const googleValidators = {};

module.exports = { twitterValidators, facebookValidators, googleValidators };
