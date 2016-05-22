var express = require('express');
var mongoose = require('mongoose');
var config = require('./../config');
var helpers = require('./../helpers');
var router = express.Router();
var Idea = require('./../models/idea');
var Project = require('./../models/project');


router.get('/',function(req,res) {
  var db = config.getConnection();
  db.once('open',function(){
    Idea.find()
    .limit(parseInt(req.query.limit))
    .skip(parseInt(req.query.skip))
    .select({name: 1,img_url: 1,problem_solved: 1, meta: 1,category: 1})
    .exec(function(err,ideas){
      res.send(ideas);
      db.close();
    });
  });
});

router.get('/show',function(req,res){
  var db = config.getConnection();
  db.once('open',function(){
    Idea.find({_id: req.query.id})
    .exec(function(err,idea){
      res.send(idea);//Ideally, search for more data now.
      db.close();
    });
  });
});

router.post('/add',function(req,res){
  //Ideally create new user:
  var body = req.body;
  var db = config.getConnection();
  var data = {
    name: body.name,
    desc : {
      info: body['desc-info'],
      main_char : body['desc-char'].split(',')
    },
    img_url: body.image_url,
    problem_solved : body.problem_solved,
    category: body.category,
    tags: body.tags.split(',')
  };

  var idea = new Idea(data);
  idea.save(function(error,idea){
    //Validation issues:
    if(error !== null){
      var parsedErrors = helpers.mongooseErrorsToJson(error);
      console.log(parsedErrors);
      res.send(parsedErrors);
    }

    console.log(idea);
    res.send(idea);
    db.close();
  });
});

router.post('/addComment',function(req,res){
  //Ideally create new user:
  var id = req.body.id;
  var db = config.getConnection();
  var like = req.body.like === 'true';
  console.log(Boolean(req.body.like));

  db.once('open',function(){
    Idea.findByIdAndUpdate(id,{$push : {comments: {comment: req.body.comment,like: like }}},function(error,idea){
      var data = {
        status : error ? "error" : "success",
        error: error,
        data: idea
      };

      res.send(data);
      db.close();
    });
  });
});

router.post('/accepted',function(req,res){
  //Ideally create new user:
  var id = req.body.id;
  var db = config.getConnection();
  var like = req.body.like === 'true';
  console.log(Boolean(req.body.like));

  db.once('open',function(){
    Idea.findByIdAndUpdate(id,{accepted: true},function(error,idea){
      var data = {
        status : error ? "error" : "success",
        error: error,
        data: idea
      };
      //Add to Projects:
      var ideaData = {
        name: idea.name,
        info: idea.problem_solved,
        img_url: idea.img_url
      };

      console.log(ideaData);

      var project = new Project({idea : ideaData});
      project.save(function(err,p){
        console.log(err);
        res.send(data);
        
        db.close();
      });

    });
  });
});


module.exports = router;
