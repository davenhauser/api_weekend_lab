require('dotenv').config();

// require request, locus, and opener modules.
var request = require('request'),
    opener  = require('opener'),
    locus   = require('locus');


var firstplace;


//function printTemperatures()

var findPlace = function(){
request("https://api.foursquare.com/v2/venues/40a55d80f964a52020f31ee3?client_id=" +process.env.CLIENT_ID + "&client_secret=" + process.env.CLIENT_SECRET + "&v=20140806&m=foursquare", function (error, response, body) {

  if (!error && response.statusCode == 200) {
    firstplace = JSON.parse(body);
    var good = firstplace.response.venue.location.address;
     // eval(locus);
  console.log("THE CURRENT ADDRESS IS: " + good)
  }
})
}


// module.exports = API;
module.exports = {
  findPlace: findPlace
}

findPlace()
