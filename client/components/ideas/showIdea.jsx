import React from 'react';
import {Link} from 'react-router';
import {IdeaComment} from './ideaComment.jsx';

export var ShowIdea = React.createClass({
    displayName: 'ShowIdea',
    getInitialState: function(){
      return {
        idea : {},
        comments: []
      };
    },
    like: function(){
      this.addComment(true);
    },
    dislike: function(){
      this.addComment(false);
    },
    addComment: function(liked){
      var component = this;
      var commentBox = this.refs.commentBox;

      if(commentBox.value === ''){
        alert("Ha de escribir un comentario antes de calificar esta idea.");
        return false;
      }
      else if(commentBox.value.length <= 5){
        alert("Su comentario es demasiado corto");
        return false;
      }

      //Send ajax;
      var postData = {
        id: this.props.params.ideaId,
        like:  liked,
        comment: commentBox.value
      };

      $.ajax({
        url: '/api/idea/addComment',
        method: 'POST',
        dataType: 'json',
        data: postData,
        success: function(data){
          console.log(data);
          if(data.status !== 'success')
            return false;
          console.log(data.data.comments);
          var comments = data.data.comments;
          comments.push(postData);
          component.setState({comments : comments});
        },
        error: function(error){
          console.log(error);
        }
      });


    },
    componentDidMount: function(){
      //Get categories:
      var component = this;
      $.ajax({
        url: '/api/idea/show',
        dataType: 'json',
        method: 'GET',
        data: { id: component.props.params.ideaId },
        success: function(data){
          component.setState({
            idea : data[0], //A single item is supposed to be returned.,
            comments: data[0].comments
          });
        },
        error: function(err){
          console.log(err);
        }
      });

    },
    render: function(){
        var idea = this.state.idea;
        var comments = this.state.comments;

        return (
          <div>
            <div className='container idea-container'>
              <div className='row'>
                <div className='col-xs-12 img-idea-parent' style={{height: '10em'}}>
                  <img className='img-idea' src={idea.img_url}/>
                </div>
              </div>
              <div className='row'>
                <div className='col-xs-12 no-padding-side pucmm-bg'><h1 className='text-center'>{idea.name}</h1></div>
                <div className='col-xs-12'>
                  <br/>
                  <p dangerouslySetInnerHTML={{__html:idea.desc}}></p>
                </div>
                <hr/>
                <div className='col-xs-12 no-padding-side flex-container'>
                  <div className='col-xs-2 no-padding-side flex-item'>
                    <button onClick={this.like} className='btn btn-pucmm no-border btn-block'>
                      <i className='fa fa-thumbs-up'></i>
                      <br/>
                      Me Gusta
                    </button>
                  </div>
                  <div className='col-xs-8 flex-item clouds-bg'>
                    <form className='form btn-block'>
                      <div className='form-group '>
                        <br/>
                        <p className='text-center'><label for='reason_rate'>Deja un Comentario</label></p>
                        <input className='form-control' ref='commentBox' type='text' placeholder="¿Porque te gusta o no esta idea?" />
                      </div>
                    </form>
                  </div>
                    <div className='col-xs-2 no-padding-side flex-item'>
                      <button onClick={this.dislike} className='btn btn-pucmm no-border btn-block'>
                        <i className='fa fa-thumbs-down'></i>
                        <br/>
                        No Me Gusta
                      </button>
                    </div>
                </div>
              </div>
              {/*<div className='col-xs-12'> -- Similar
              </div>*/}

            </div>
            <div className='container idea-container'>
              {/*Comments*/}
              <div className='row'>
                <div className='col-xs-12 no-padding-side pucmm-bg'><h4 className='text-center'>Que dicen los demas sobre esta idea</h4></div>
              </div>
              {
                  comments.map(function(comment){
                    return (
                      comment ? <IdeaComment comment={comment} key={comment._id}/> : ''
                    );
                  })
              }
            </div>
          </div>
      );
    }
});
