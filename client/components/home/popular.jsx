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
            <div className="col-xs-6 col-md-3 " key={idea._id}>
              <div className="thumbnail">
                <div>
                  <Link to={'/idea/'+idea._id}>
                    <div style={{position: "relative"}}>
                      <div className="like-tag">
                        <i className="fa fa-thumbs-up" style={{position:"absolute", padding:"4px", paddingLeft:"6px", left:"0%"}} aria-hidden="true"></i>
                        <p className="like-numbers">{idea.meta.likes}</p>
                      </div>
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
            <h3 style={{color:"#1066a4"}}>
              <b>
                Ideas Populares
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
