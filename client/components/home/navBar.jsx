import React from 'react';
import {Link} from 'react-router';

export var NavBar = React.createClass({
    displayName: 'NavBar',
    getInitialState: function(){
      return {
        categories : []
      };
    },
    componentDidMount: function(){
      //Get categories:
      var component = this;
      $.ajax({
        url: '/api/categories',
        dataType: 'json',
        method: 'GET',
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

          <nav className="navbar navbar-default" style={{marginBottom:"0px"}}>
            <div className="container-fluid">
              <div className="navbar-header">
                <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                  <span className="sr-only">Toggle navigation</span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                </button>
                <a className="navbar-brand" href="#"></a>
              </div>

              <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                <ul className="nav navbar-nav">
                  <li className={'' + (window.location.pathname == '/home' ? " active " : '')}>
                    <Link to='/home'>Home<span className="sr-only">(current)</span></Link>
                  </li>
                  <li className={'' + (window.location.pathname === '/ideas' ? " active " : '')}>
                    <Link to='/ideas'>Ideas</Link>
                  </li>
                  <li className={'dropdown' + (window.location.pathname.indexOf('/ideas/category') !== -1 ? " active " : '')}>
                    <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Catalogo por Categorias<span className="caret"></span></a>
                    <ul className="dropdown-menu" ref='categoryDropdown'>
                      {categories.map(function(category){
                        return <li key={category}><Link to={'/ideas/category/'+category}>{category}</Link></li>;
                      })}
                    </ul>
                  </li>
                  <li className={'' + (window.location.pathname === '/ideas' ? " active " : '')}>
                    <Link to='/projects'>Mis Proyectos</Link>
                  </li>
                  <li className={'' + (window.location.pathname === '/about' ? " active " : '')}>
                    <Link to='/about'>Sobre PUCMM</Link>
                  </li>
                  <li className={'' + (window.location.pathname === '/support' ? " active " : '')}>
                    <Link to='/support'>Soporte</Link>
                  </li>
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
