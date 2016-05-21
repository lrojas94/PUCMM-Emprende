module.exports = {
  mongooseErrorsToJson : function(error){
    var errors = error.errors;
    var parsedErrors = {};
    for(var e in errors){
      parsedErrors[e] = errors[e].message;
    }

    return parsedErrors;
  }
};
