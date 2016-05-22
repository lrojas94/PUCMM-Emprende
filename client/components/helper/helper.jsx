

//this will split tags
export var SplitTag = function(string){
  console.log(string);
  return string.split(", ");
}


export var FormDatatoJson = function(formData){

  //var formData = (data);
    
    var jsonData = {};

    for(var input in formData){
      jsonData[formData[input].name] = formData[input].value;
    }

    return jsonData;
}
