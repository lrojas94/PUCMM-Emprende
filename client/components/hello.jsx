import React from 'react';
import {Link} from 'react-router';


export var Hello = React.createClass({
    displayName: 'Hello',
    sendGet: function(e){
    	e.preventDefault();
    	//Init ajax call:
    	$.ajax({
    		url: '/api',
    		method: 'GET',
    		dataType: 'json',
        data: {msg: "Hello Server with Get!"},
    		success: function(data){
    			console.log(data);
    		}
    	});
    },
    sendPost: function(e){
    	e.preventDefault();
    	//Init ajax call:
    	$.ajax({
    		url: '/api',
    		method: 'POST',
    		dataType: 'json',
        data: {msg: "Hello Server with Post!"},
    		success: function(data){
    			console.log(data);
    		}
    	});
    },
    render: function(){
        return (
          <div>
			     <div>This is a react hello module</div>
			     <br/>
           <input type='button' onClick={this.sendGet} value='GET API Data'/>
			     <br/>
           <input type='button' onClick={this.sendPost} value='POST API Data'/>
           <br/>
           <Link to='/hello/helloAgainMessage'>Hello Again as Child of Hello</Link>
		       {this.props.children}
		      </div>
        );
    }
});
