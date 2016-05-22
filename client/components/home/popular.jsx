import React from 'react';
import {Link} from 'react-router';

var dat = [
  {
    "_id": "574071088d47a426a57bf753",
    "name": "Idea Test",
    "meta": {
      "tags": [],
      "favs": 0,
      "dislikes": 0,
      "likes": 0
    },
    "img_url": "http://www.pucmm.edu.do/recursos/PublishingImages/Paginas/logos/Logo%20PUCMM%20(Color).png",
    "problem_solved": "The solved problem"
  },
  {
    "_id": "5740731b8d47a426a57bf754",
    "name": "Idea Test2",
    "meta": {
      "tags": [],
      "favs": 0,
      "dislikes": 0,
      "likes": 0
    },
    "img_url": "http://www.pucmm.edu.do/recursos/PublishingImages/Paginas/logos/Logo%20PUCMM%20(Color).png",
    "problem_solved": "The solved problem"
  },
  {
    "_id": "5740731d8d47a426a57bf755",
    "name": "Idea Test3",
    "meta": {
      "tags": [],
      "favs": 0,
      "dislikes": 0,
      "likes": 0
    },
    "img_url": "http://www.pucmm.edu.do/recursos/PublishingImages/Paginas/logos/Logo%20PUCMM%20(Color).png",
    "problem_solved": "The solved problem"
  }
];

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
              <Link to={'ideas/idea/'+idea._id}>
              <img className="img img-responsive" src={idea.img_url} alt={idea.name}/>
              </Link>
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
