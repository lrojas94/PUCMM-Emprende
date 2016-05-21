import React from 'react';
import ReactDOM from 'react-dom';
import {Router,Route,Link,browserHistory} from 'react-router';

//Components:
import {Hello} from './components/hello.jsx';
import {HelloAgain} from './components/helloAgain.jsx';

var HelloAgainWrapper = React.createClass({
	//This is only used to pass props to the class HelloAgain. I don't see a point to use this (Unless API data is expected I guess) but since this is convention, here it is.
	displayName: 'HelloAgainWrapper',
	render: function() {
		return (
			<HelloAgain
			reachingFrom="Hello Again Wrapper Module"
			message={"You're using a wrapper to pass this message.\n"+
			"The Router CANNOT pass messages, so basically, you create a classWrapper which renders"+
			"<YourClass prop='value'/>"}
			/>
		);
	}
});

var App = React.createClass({
  render: function() {
    return (
      <div>
        <h1>Template App</h1>
        <ul>
          <li><Link to="/hello">Hello Module</Link></li>
          <li><Link to="/helloAgain">Hello Again Module</Link></li>
          <li><Link to="/hello/helloAgainMessage">Hello Again Module MSG</Link></li>
        </ul>
        {this.props.children} {/*This is used so that the router can print correct module.*/}
      </div>
    );
  }
});

ReactDOM.render((
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <Route path="hello" component={Hello}>
      	<Route path="helloAgainMessage" component={HelloAgainWrapper}/>
      </Route>
      <Route path="helloAgain" component={HelloAgain}/>
    </Route>
  </Router>
), document.getElementById('content'));
