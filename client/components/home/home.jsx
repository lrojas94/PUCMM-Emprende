import React from 'react';
import {Link} from 'react-router';
import {Carousel} from './carousel.jsx';

export var Home = React.createClass({
    displayName: 'home',
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
          <div>
            <div class='container-fluid'>
    					<Carousel/>
    				</div>
    				<div className='container'>
    	      </div>
          </div>
        );
    }
});
