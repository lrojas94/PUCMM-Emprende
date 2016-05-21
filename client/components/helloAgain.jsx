var React = require('react');

export var HelloAgain = React.createClass({
    displayName: 'HelloAgain',
    getInitialState: function(){
      return ({changeMe: 'red'});
    },
    changeMe: function(e){
      this.setState({changeMe: 'blue'});
    },
    componentDidMount: function(){
      $('#wazza').fadeIn();
    },
    render: function(){
        return (
          <div id='wazza'  className={this.state.changeMe} style={{display:'none'}}>
          This is a react hello AGAIN Module!
          <br/>
  	   		<strong>Im Being reached from: {this.props.reachingFrom || "HelloAgain Module"}</strong>
          <input onClick={this.changeMe} type='button' value='Change Me'/>
  	   		<br/>
  	   		{this.props.message ? <div>I recieved a message!: <strong>{this.props.message}</strong></div> : ''}
          </div>);
    }
});
