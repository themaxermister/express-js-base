var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('work', { title: 'Work Experience' });
});

module.exports = router;
