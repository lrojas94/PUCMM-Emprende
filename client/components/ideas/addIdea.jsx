import React from 'react';
import {Router,Link,browserHistory} from 'react-router';
import {FormDatatoJson} from './../helper/helper.jsx';


export var AddIdea = React.createClass({
  getInitialState: function(){
    return {
      categories : []
    };
  },
  componentDidMount:function(){
    var component = this;
    $.ajax({
      url: '/api/categories',
      method: 'GET',
      dataType: 'json',
      success: function(data){
        component.setState({categories : data});
      }
    });
  },
  onSubmit: function(e){

    e.preventDefault();
    var component = this;
    var closeBtn = this.refs.cancelBtn;
    var jsonData = FormDatatoJson($(this.refs.addIdea).serializeArray());
    console.log(jsonData);
    $.ajax({
      url: '/api/idea/add',
      data: jsonData,
      method: 'POST',
      dataType: 'json',
      success: function(data){
        if(!data.name)//Means we got actual data.
          return false;
        browserHistory.push('/ideas');
      }
    });

  },
  render: function(){
    var categories = this.state.categories.map(function(category){
      return (
        <option value={category} key={category}>{category}</option>
      );
    });
    return(
      <div className='container idea-container'>
        <form onSubmit={this.onSubmit} ref="addIdea" className='form' method = "post">
          <h2>Agregar Idea Nueva</h2>
          <br/>
          <div className='row'>
            <div className='col-xs-12'>
              <div className='form-group'>
                <label for='name-field'>Nombre del Proyecto</label>
                <input type="text" name='name' id='name-field' className='form-control'/>
              </div>
            </div>
            <div className='col-xs-12'>
              <div className='form-group'>
                <label for='image-url'>Imagen de la Campana (URL)</label>
                <input type="text" name='image_url' id='image-url' className='form-control'/>
              </div>
            </div>
            <div className='col-xs-12'>
              <div className='form-group'>
                <label for='problem-solved'>Problematica que Resuelve</label>
                <input type="text" name='problem_solved' id='problem-solved' className='form-control'/>
              </div>
            </div>
            <div className='col-xs-12'>
              <div className='form-group'>
                <label for='desc-info'>Resumen del Proyecto</label>
                <textarea rows='4' type="text" name='desc-info' id='desc-info' className='form-control'/>
              </div>
            </div>
            <div className='col-xs-12'>
              <div className='form-group'>
                <label for='desc-char'>Caracteristicas del Proyecto (Separe por comas)</label>
                <textarea rows='4' type="text" name='desc-char' id='desc-char' className='form-control'/>
              </div>
            </div>
            <div className='col-xs-6'>
              <div className='form-group'>
                <label for='category'>Categoria</label>
                <select rows='4' type="text" name='category' id='category' className='form-control'>
                  {categories}
                </select>
              </div>
            </div>
            <div className='col-xs-6'>
              <div className='form-group'>
                <label for='tags'>Tags <small>(Separe por comas)</small></label>
                <input type="text" name='tags' id='tags' className='form-control'/>
              </div>
            </div>
            <div className='col-xs-6'>
              <input type="submit" className='btn btn-pucmm btn-block'/>
            </div>
            <div className='col-xs-6'>
              <Link to='/ideas/' ref='cancelBtn' className='btn btn-danger btn-block'>Cancelar</Link>
            </div>
          </div>
          <br/>
        </form>
      </div>

    );
  }
  });
