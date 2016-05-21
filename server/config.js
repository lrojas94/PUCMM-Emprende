var mongoose = require('mongoose');

module.exports = {
  "DATABASE_URL": "mongodb://localhost/pucmm-emprende",
  getConnection : function(){
    mongoose.connect(this.DATABASE_URL);
    return mongoose.connection;
  }
};
