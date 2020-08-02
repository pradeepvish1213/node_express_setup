var express = require('express');
var router = express.Router();
let usersList = require('./../controllers/usersList');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/list',usersList);

module.exports = router;
