var express = require('express');
var mongoose = require('mongoose');
var config = require('./../config');
var Idea = require('./../models/idea');
var router = express.Router();


router.get('/',function(req,res) {
  var db = config.getConnection();
  db.once('open',function(){
    Idea.find()
    .limit(parseInt(req.query.limit))
    .exec(function(err,projects){
      res.send(projects);
      db.close();
    });
  });
});

router.post('/add',function(req,res){
  res.send('Adding C:');
});

module.exports = router;
