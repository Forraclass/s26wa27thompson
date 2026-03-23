var express = require('express');
var router = express.Router();

/* GET interesting fact. */
router.get('/', function(req, res, next) {
  res.render('mydata', { title: 'Tristen Lee Thompson' });
});

module.exports = router;
