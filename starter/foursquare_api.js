require('dotenv').config();

// require request, locus, and opener modules.
var request = require('request'),
    opener  = require('opener'),
    locus   = require('locus');


var firstplace;


//function printTemperatures()

var printLocation = function(){
request("https://api.foursquare.com/v2/venues/search?client_id=" +process.env.CLIENT_ID + "&client_secret=" + process.env.CLIENT_SECRET + "&client_secret=FC02AUJEN13SHNJOXB5B3YO12KJ3IZMQQPFM0DKE0OCZEFRS&v=20140806&near=Eagle-rock,CA&m=foursquare&query=sushi", function (error, response, body) {

  if (!error && response.statusCode == 200) {
    firstplace = JSON.parse(body);
    var good = firstplace.response.venues[0].name
     // eval(locus);
  console.log("THE CURRENT ADDRESS IS: " + good)
  }
})
}


// module.exports = API;
module.exports = {
  printLocation: printLocation
}

printLocation();
