var express = require('express'),
    router  = new express.Router();

var searchController = require("../controllers/search");
var express = require('express'),
    router  = new express.Router();

var searchController = require("../controllers/search");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

/* POST to search */
router.post('/search', searchController.search);

module.exports = router;
