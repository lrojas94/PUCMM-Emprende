import React from 'react';
import {Link} from 'react-router';

export var Projects = React.createClass({
  render: function() {
    return (
			<div className="container">
      {/*-------------------------This will load tables Dinamically*/}
      {/*-------------------------This is the IDEA_INFO part*/}
        <div className="row flex-container">
              <div className="col-xs-3 col-md-2 flex-item">
                <img className="project-thumbnail center-block" src="http://img14.deviantart.net/0da8/i/2014/035/a/6/random_monster_by_ronyeryx-d753zl3.png"/>
              </div>
              <div className="col-xs-9 col-md-10 flex-item">
                <div style={{backgroundColor:"#1066a4", color:"#FFF", margin:"0"}}>
                  IDEA_NAME
                </div>
                <div style={{backgroundColor:"#e0f2f2", margin:"0"}}>
                  IDEA_PROBLEM_SOLVED
                </div>
              </div>
        </div>
      {/*----------------------------------------------------------*/}
      </div>
    );
  }
});
