var mongoose = require('mongoose');
var states = ['Aprovacion', 'Refuerzo', 'Evaluacion', 'Ejecucion'];
var schema = new mongoose.Schema({
  idea: {
      name: {
        type: String,
        required: false
      },

      info: {
        type: String,
        required: false
      },

      img_url: {
        type: String,
        required: false
      }

  },
  leader: {
      name: {
        type: String,
        required: false,
        default: "Miguel German"
      },

      occupation: {
        type: String,
        required: false,
        default: "Programador"
      }
  },
  mentors: {
    type: [String],
    required: false,
    default: "Ramon Ortencio"
  },

  personal: {
    type: [String],
    required: false
  },

  aproval_status: {
    type: String,
    required: false,
    enum: states,
    default: 'Aprovacion'
  },

  date_pub: {
    type:Date,
    default: Date.now
  },
});

module.exports = mongoose.model('Project',schema);
