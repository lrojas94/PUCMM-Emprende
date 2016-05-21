var express = require('express');
var mongoose = require('mongoose');
var config = require('./../config');
var helpers = require('./../helpers');
var router = express.Router();
var Idea = require('./../models/idea');


router.get('/',function(req,res) {
  var db = config.getConnection();
  db.once('open',function(){
    Idea.find()
    .limit(parseInt(req.query.limit))
    .skip(parseInt(req.query.skip))
    .select({name: 1,img_url: 1,problem_solved: 1, meta: 1,category: 1})
    .exec(function(err,projects){
      res.send(projects);
      db.close();
    });
  });
});

router.post('/add',function(req,res){
  //Ideally create new user:
  var data = req.body; //Comes parsed as Json thanks to body-parser.
  var idea = new Idea(data);
  idea.save(function(error){
    //Validation issues:
    var parsedErrors = helpers.mongooseErrorsToJson(error);
    res.send(parsedErrors);
  });
});

module.exports = router;
