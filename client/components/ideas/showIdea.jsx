import React from 'react';
import {Link} from 'react-router';

export var ShowIdea = React.createClass({
    displayName: 'ShowIdea',
    getInitialState: function(){
      return {
        idea : {}
      };
    },
    componentDidMount: function(){
      //Get categories:
      var component = this;
      $.ajax({
        url: '/api/idea/similarIdeas',
        dataType: 'json',
        method: 'POST',
        data: { id: component.props.idea.ObjectId },
        success: function(data){
          component.setState({
            categories : data
          });
        },
        error: function(err){
          console.log(err);
        }
      });

    },
    render: function(){
        var categories = this.state.categories;
        return (

          <nav className="navbar navbar-default">
            <div className="container-fluid">
              <div className="navbar-header">
                <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                  <span className="sr-only">Toggle navigation</span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                </button>
                <a className="navbar-brand" href="#">Menu</a>
              </div>

              <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                <ul className="nav navbar-nav">
                  <li className="active"><Link to='/'>Home<span className="sr-only">(current)</span></Link></li>

                  <li className="dropdown">
                    <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Catalogo por Categorias<span className="caret"></span></a>
                    <ul className="dropdown-menu" ref='categoryDropdown'>
                      {categories.map(function(category){
                        return <li key={category}><a href="#">{category}</a></li>;
                      })}
                    </ul>
                  </li>
                  <li><a href="#">Sobre PUCMM</a></li>
                  <li><a href="#">Soporte</a></li>
                </ul>
                <ul className="nav navbar-nav navbar-right">
                <form className="navbar-form navbar-left" role="search">
                  <div className="form-group">
                    <input type="text" className="form-control" placeholder="Buscar Ideas..."/>
                  </div>
                </form>
                </ul>
              </div>
            </div>
          </nav>
      );
    }
});
