var express = require('express'),
    router  = new express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

/* POST to search */
router.post('/search', function(req, res, next) {
  // Printing out the content of the request!
  console.log(req.body);

  res.send({venuesSearch: 'Not implemented!'}); // return some JSON
});

module.exports = router;
