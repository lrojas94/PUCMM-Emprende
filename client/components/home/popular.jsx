import React from 'react';
import {Link} from 'react-router';

export var Popular = React.createClass({
    displayName: 'Popular',
    getInitialState: function(){
      return {data: []};
    },
    componentDidMount: function(){
      this.loadPopular();
    },
    loadPopular: function(){
      var component = this;
    	//Init ajax call:
    	$.ajax({
    		url: '/api/idea',
    		method: 'GET',
    		dataType: 'json',
    		success: function(data){
            component.setState({data: data});
        },
        error: function(xhr, status, err){
          console.error(this.props.url, status, toString());
        }
    	});
    },
    render: function(){
        var divBoxes = this.state.data.map(function(idea){
          return (
            <div className="col-xs-6 col-md-3" key={idea._id} style={{marginBottom: "30px"}}>
              <div className="thumbnail" style={{borderRadius:"0px"}}>
                <div>
                  <Link to={'ideas/idea/'+idea._id}>
                    <div style={{position: "relative"}}>
                      <div className="carousel-footer-parent" style={{height: "25px"}}>
                        <h4 style={{margin: "auto", marginTop: "3px", textAlign:"center"}}>{idea.name}</h4>
                        <div className="carousel-footer"></div>
                      </div>
                      <img className="img img-responsive" src={idea.img_url} alt={idea.name}/>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          );
        });
        return (
          <div>
            <h3>
              Popular
            </h3>
            <hr/>
            <div className="row">
            {divBoxes}
            </div>
          </div>
        );
    }
});
