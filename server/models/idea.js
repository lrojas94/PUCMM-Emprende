var mongoose = require('mongoose');
var categories = require('./categories');

var schema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  postedBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  category: {
    type: String,
    required: true,
    enum : categories,
    default: "General"
  },
  problem_solved: {
    type: String,
    default: "The solved problem",
    required: true
  },
  desc: {
    type: String,
    required: true
  },
  date_pub: {
    type:Date,
    default: Date.now
  },
  img_url: {
    type: String,
    default: "http://dreamatico.com/data_images/people/people-2.jpg",
    required: true
  },
  meta: {
    likes: {
      type: Number,
      default: 0
    },
    dislikes: {
      type: Number,
      default: 0
    },
    favs: {
      type: Number,
      default: 0
    },
    tags: [String]
  },
  comments: [{
    like: Boolean,
    comment: String,
    date: {type: Date,default: Date.now()}
    //User
  }]
});

module.exports = mongoose.model('Idea',schema);
