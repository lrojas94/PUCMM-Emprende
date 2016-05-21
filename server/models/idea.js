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
    enum : categories
  },
  problem_solved: {
    type: String,
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
  }
});

module.exports = mongoose.model('Idea',schema);
