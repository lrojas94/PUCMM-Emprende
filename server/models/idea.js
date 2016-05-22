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
        info: {
          type: String,
          required: true
        },

        main_char: {
          type: [String],
          required: false,
          default: []
        }
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
  comments: {
    type: [{
      like: Boolean,
      comment: String,
      date: {type: Date,default: Date.now()}
      //User
    }],
    default: []
  },

  accepted: {
    type: Boolean,
    default: false
  }
});

module.exports = mongoose.model('Idea',schema);
