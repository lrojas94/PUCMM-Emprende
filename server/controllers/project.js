var mongoose = require('mongoose');
var states = ['Aprovacion', 'Refuerzo', 'Evaluacion', 'Ejecucion'];
var schema = new mongoose.Schema({
  idea: {
      name: {
        type: String,
        required: true
      },

      info: {
        type: String,
        required: true
      },

      img_url: {
        type: String,
        required: false
      }

  },
  leader: {
      name: {
        type: String,
        required: true
      },

      occupation: {
        type: String,
        required: false
      }
  },
  mentors: {
    type: [],
    required: true
  },

  personal: {
    type: [],
    required: false
  },

  aproval_status: {
    type: String,
    required: true,
    enum: states,
    default: 'Aprovacion'
  },

  date_pub: {
    type:Date,
    default: Date.now
  },
});

module.exports = mongoose.model('Proyecto',schema);
