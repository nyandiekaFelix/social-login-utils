function validParams(params, requiredKeys = []) {
  const errors = [];

  requiredKeys.forEach(key => {
    if(!params[key]) errors.push(`You need to provide a value for '${key}'`);
  });

  if (errors.length) throw ({ errors });
}

export const twitterValidators = {};
export const facebookValidators = {};
export const googleValidators = {};
