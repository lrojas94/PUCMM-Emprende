import React from 'react';
import {Link} from 'react-router';

var Arrow = React.createClass({
  displayName: 'Arrow',
  render: function(){
    return(
      <button type="button">Next</button>
    );
  }
});


export var Carousel = React.createClass({
    displayName: 'Carousel',
    componentDidMount: function(){
      $('#slick-carousel').slick({
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true,
          dots: true,
          Arrows: <Arrow/>
      });
    },
    render: function(){
        return (
          <div id="slick-carousel" className='jumbotron'>
			       <div><h1>1</h1></div>
             <div><h1>2</h1></div>
             <div><h1>3</h1></div>
		      </div>
        );
    }
});
