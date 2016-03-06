
// require the new npm modules in package.json, including
var request = require("request");

// require the "environment," which is a catch-all loader for app-wide
// variables from the outside (process.env) environment and app-specific
// constants
var env = require("../config/environment");

// Creating the basic "endpoint" for a places search:
// - https://developer.foursquare.com/start/search
// - https://developer.foursquare.com/docs/venues/search

var baseUri = "https://api.foursquare.com/v2/venues/search";

// Creating the param string necessary to authenticate the request,
// described in the docs here:
// - https://developer.foursquare.com/overview/auth#authentication
//
// Loading the API keys ("client ID" and "client secret") from the
// file .env in to the current process, using
// `require("dotenv").load()` in config/environment.

var clientIdParam     = "?client_id="     + process.env.CLIENT_ID;
var clientSecretParam = "&client_secret=" + process.env.CLIENT_SECRET;

// Adding the auth params together with the "versioning" param:
// - https://developer.foursquare.com/overview/versioning
// - (the beginning of…) https://developer.foursquare.com/start/search

var authParams = clientIdParam + clientSecretParam + "&v=20151001"

function search(req, res, next) {
  console.log(req.body);

  // Build the entire URI from the static parts above, and the user
  // input, encoded for URIs.
  var uri = baseUri + authParams;
  uri += "&near=" + encodeURIComponent(req.body.search.place);

  console.log("Attempting to connect to: ", uri);

  // Use request to contact the API…
  // (note: do not call the middle argument here 'res'!!!)
  request.get(uri, function(err, response, body) {
    var body = JSON.parse(body);

    // Call res.send *in the API request's callback*!
    res.send(body.response.venues);
  });
}

module.exports = {
  search: search
};
