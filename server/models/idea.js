var mongoose = require('mongoose');

var schema = new mongoose.Schema({
  name: String,
  short_desc: String,
  desc: String,
  date_pub: {type:Date, default: Date.now},
  meta: {
    likes: Number,
    dislikes: Number,
    favs: Number,
  }
});

module.exports = mongoose.model('Idea',schema);
