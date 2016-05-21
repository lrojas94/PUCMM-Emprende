import React from 'react';
import ReactDOM from 'react-dom';
import {Router,Route,Link,browserHistory} from 'react-router';

//Components:
import {Hello} from './components/hello.jsx';
import {HelloAgain} from './components/helloAgain.jsx';
import {Login} from './components/login/login.jsx';
import {NavBar} from './components/home/navBar.jsx';
import {Home} from './components/home/home.jsx';


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
			</div>
    );
  }
});

ReactDOM.render((
  <Router history={browserHistory}>
    <Route path="/" component={App}>
			<Route path="home" component={Home}/>
      <Route path="hello" component={Hello}>
      	<Route path="helloAgainMessage" component={HelloAgain}/>
      </Route>
      <Route path="helloAgain" component={HelloAgain}/>
    </Route>
  </Router>
), document.getElementById('content'));
