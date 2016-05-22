import React from 'react';
import {Link} from 'react-router';
import {FormDatatoJson} from './../helper/helper.jsx';


export var AddIdea = React.createClass({
  onSubmit: function(e){

    e.preventDefault();
    var jsonData = FormDatatoJson($(this.refs.addIdea).serializeArray());
    console.log(jsonData);

  },
  render: function(){
    return(
      <form onSubmit={this.onSubmit} ref="addIdea" method = "post">

      <input type="text" name='name'/>
      <input type="text" name='category'/>
      <input type="text" name='problem_solved'/>
      <input type="text" name='desc'/>
      <input type="text" name='tags'/>
      <input type="submit" />
      </form>

    );
  }
  });
