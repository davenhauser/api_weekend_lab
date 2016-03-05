var _ = require('lodash');

var localEnvVars = {
  TITLE:      '▦▨▧▩\'in it!',
  SAFE_TITLE: 'foursquare_api_app'
};

// Merge all environmental variables into one object.
module.exports = _.extend(process.env, localEnvVars);
