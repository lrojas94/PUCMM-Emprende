import React from 'react';
import ReactDOM from 'react-dom';
import {Router,Route,Link,browserHistory} from 'react-router';

//Components:
import {Hello} from './components/hello.jsx';
import {HelloAgain} from './components/helloAgain.jsx';
import {Login} from './components/login/login.jsx';
import {NavBar} from './components/home/navBar.jsx';
import {Carousel} from './components/home/carousel.jsx';


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
				<div className='container'>
				<Carousel/>
	        <ul>
	          <li><Link to="/hello">Hello Module</Link></li>
	          <li><Link to="/helloAgain">Hello Again Module</Link></li>
	          <li><Link to="/hello/helloAgainMessage">Hello Again Module MSG</Link></li>
	        </ul>
	        {this.props.children} {/*This is used so that the router can print correct module.*/}

	      </div>
			</div>
    );
  }
});

ReactDOM.render((
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <Route path="hello" component={Hello}>
      	<Route path="helloAgainMessage" component={HelloAgain}/>
      </Route>
      <Route path="helloAgain" component={HelloAgain}/>
    </Route>
  </Router>
), document.getElementById('content'));
