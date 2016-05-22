import React from 'react';
import {Link} from 'react-router';
import {IdeaListItem} from './ideaListItem.jsx';

export var ShowIdeas = React.createClass({
    displayName: 'ShowIdeas',
    getInitialState: function(){
      return {
        ideas : []
      };
    },
    componentDidMount: function(){
      //Get categories:
      var component = this;
      $.ajax({
        url: '/api/idea/',
        dataType: 'json',
        method: 'GET',
        success: function(data){
          component.setState({
            ideas : data
          });
        },
        error: function(err){
          console.log(err);
        }
      });

    },
    render: function(){
      var category = this.props.params.category;
      var ideas = this.state.ideas;
      return (
        <div className='container'>
          {this.props.children}
          <h1 className='pucmm-title'>Ideas Propuestas</h1>
          <div className='row'>
            {ideas.map(function(idea){
              return (
                category ?
                  (idea.category === category ? <IdeaListItem idea={idea} key={idea._id}/> : '')
                  : <IdeaListItem idea={idea} key={idea._id}/>
              );
            })}
          </div>
        </div>
      );
    }

});
