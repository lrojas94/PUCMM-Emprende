import React from 'react';
import {Link} from 'react-router';

var Arrow = React.createClass({
  displayName: 'Arrow',
  render: function(){
    return(
      <button type="button" className={this.props.class}>{this.props.txt}</button>
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
          nextArrow: '<button type="button" class="arrow-next">></button>',
          prevArrow: '<button type="button" class="arrow-prev"><</button>',

      });
    },
    render: function(){
        return (
          <div className="jumbotron">
            <div id="slick-carousel" className="jumbotron">
  			       <div><h1>PICTURE #1</h1></div>
               <div><h1>PICTURE #2</h1></div>
               <div><h1>PICTURE #3</h1></div>
  		      </div>
          </div>
        );
    }
});
