var express = require('express');
var categories = require('./../models/categories.js');
var router = express.Router();


router.get('/',function(req,res) {
  res.send(categories);
});

module.exports = router;
