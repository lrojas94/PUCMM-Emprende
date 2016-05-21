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
      var search = this.props.params.searchIdeas;
      var ideas = this.state.ideas;
      return (
        <div className='container'>
          <div className='row'>
            {ideas.map(function(idea){
              return (
                search ?
                  (idea.name.toLowerCase().indexOf(search.toLowerCase()) !== -1 ? <IdeaListItem idea={idea} key={idea._id}/> : '')
                  : <IdeaListItem idea={idea} key={idea._id}/>
              );
            })}
          </div>
        </div>
      );
    }

});
