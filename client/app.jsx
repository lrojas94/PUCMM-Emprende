import React from 'react';
import ReactDOM from 'react-dom';
import {Router,Route,Link,browserHistory} from 'react-router';

//Components:

import {Login} from './components/login/login.jsx';
import {NavBar} from './components/home/navBar.jsx';
import {Home} from './components/home/home.jsx';
import {ShowIdeas} from './components/ideas/showIdeas.jsx';
import {Projects} from './components/projects/projects.jsx';
import {Popular} from './components/home/popular.jsx';
import {ShowIdea} from './components/ideas/showIdea.jsx';
import {About} from './components/about/about.jsx';
import {Support} from './components/support/support.jsx';
import {Footer} from './components/footer/footer.jsx';
import {AddIdea} from './components/ideas/addIdea.jsx';


var App = React.createClass({
	openLogin : function(e){
		e.preventDefault();
		$('#loginModal').modal('show');
	},
  render: function() {
		var loginLinkStyle = {
			position: 'relative'
		};

    return (
			<div>
				<a href='#' style={loginLinkStyle}  className="btn btn-sm btn-primary pull-right" onClick={this.openLogin}>
					<i className='fa fa-user'></i> Iniciar sesion
				</a>
{/*-----------------------------------------------Header Zone------------------------------------------------------------------*/}
				<Login/>
				<div className='container-fluid'>
					<div className='jumbotron pucmm-bg'>
						<div className='row'>
							<div className='col-xs-2'><img className='img img-responsive' src='http://www.pucmm.edu.do/recursos/PublishingImages/Paginas/logos/Logo%20PUCMM%20(Color).png'/></div>
							<div className='col-xs-10'><h1>PUCMM Emprende</h1></div>
						</div>
					</div>
					<NavBar/>
				</div>
{/*----------------------------------------------Container Zone---------------------------------------------------------------*/}
				{this.props.children}
				<Footer/>
			</div>
    );
  }
});

ReactDOM.render((
  <Router history={browserHistory}>
    <Route path="/" component={App}>
			<Route path="home" component={Home}/>
			<Route path="idea/:ideaId" component={ShowIdea}/>
			<Route path="ideas" component={ShowIdeas}>
      	<Route path="category/:category" component={ShowIdea}/>
      </Route>
			<route path="add" component={AddIdea}/>
			<Route path="about" component={About}/>
			<Route path="support" component={Support}/>
			<Route path="projects" component={Projects}/>
    </Route>
  </Router>
), document.getElementById('content'));
