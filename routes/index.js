var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.json({
    status:"ok111"
  })
});
/* GET home page. */
router.get('/health', function(req, res, next) {
  res.json({
    status:"ok111"
  })
});

module.exports = router;
