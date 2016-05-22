import React from 'react';
import {Link} from 'react-router';

export var Recent = React.createClass({
    displayName: 'Recent',
    getInitialState: function(){
      return {data: []};
    },
    componentDidMount: function(){
      this.loadRecent();
    },
    loadRecent: function(){
      var component = this;
    	//Init ajax call:
    	$.ajax({
    		url: '/api/idea',
    		method: 'GET',
    		dataType: 'json',
    		success: function(data){
            component.setState({data: data.slice(4,8)});
        },
        error: function(xhr, status, err){
          console.error(this.props.url, status, toString());
        }
    	});
    },
    render: function(){
        var divBoxes = this.state.data.map(function(idea){
          return (
            <div className="col-xs-6 col-md-3 flex-item" key={idea._id} style={{marginBottom: "30px"}}>
              <div className="thumbnail" style={{borderRadius:"0px"}}>
                <div className="caption">
                  <Link to={'/idea/'+idea._id}>
                    <div style={{position: "relative"}}>
                      <img className="img img-responsive" src={idea.img_url} alt={idea.name}/>
                    </div>
                  </Link>
                  <div>
                    <h4 style={{margin: "auto", marginTop: "5px", textAlign:"center"}}>{idea.name}</h4>
                    <p style={{marginTop: "10px", textAlign:"justify"}}>{idea.problem_solved}</p>
                  </div>
                </div>
              </div>
            </div>
          );
        });
        return (
          <div>
            <h3 style={{color:"#1066a4"}}>
              <b>
                Ideas Recientes
              </b>
            </h3>
            <div className="separator-div"/>
            <div className="row flex-container" style={{flexWrap: "wrap"}}>
            {divBoxes}
            </div>
          </div>
        );
    }
});
