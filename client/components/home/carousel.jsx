import React from 'react';
import {Link} from 'react-router';

var loadSlick = function(){
  $('#slick-carousel').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      dots: true,
      nextArrow: '<button type="button" class="arrow-next"><i class="fa fa-3x fa-chevron-circle-right" aria-hidden="true"></i></button>',
      prevArrow: '<button type="button" class="arrow-prev"><i class="fa fa-3x fa-chevron-circle-left" aria-hidden="true"></i></button>',
  });

};

export var Carousel = React.createClass({
    displayName: 'Carousel',
    getInitialState: function(){
      return({data: []});
    },
    componentDidMount: function(){
      this.loadFeatured();   //Should ACTUALLY call loadFeatured();

    },
    componentDidUpdate: function(prevProps,prevState){
      loadSlick();
    },
    loadFeatured: function(){
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
        console.log("Starting DivBoxes");
        return (
          <div key={idea._id} className="carousel-div">
            <Link to={'/ideas/idea/'+idea._id}>
            <div className="carousel-footer-parent">
              <div style={{padding:"10px", textAlign:"right"}}>
                <h3>{idea.name}</h3>
                <p>{idea.problem_solved}</p>
              </div>
              <div className="carousel-footer"/>
            </div>
            <img className="carousel-img" src={idea.img_url} alt={idea.name}/>
            </Link>
          </div>
        );
      });
        return (
          <div>
            <div id="slick-carousel">
  			       {divBoxes}
  		      </div>
          </div>
        );
    }
});
