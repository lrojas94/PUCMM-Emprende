var express = require('express');
var mongoose = require('mongoose');
var config = require('./../config');
var helpers = require('./../helpers');
var router = express.Router();
var Project = require('./../models/project');


router.get('/',function(req,res) {
  var db = config.getConnection();
  db.once('open',function(){
    Project.find()
    .limit(parseInt(req.query.limit))
    .skip(parseInt(req.query.skip))
    .select()
    .exec(function(err,ideas){
      res.send(ideas);
      db.close();
    });
  });
});



module.exports = router;
