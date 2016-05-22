import React from 'react';
import {Link} from 'react-router';

export var IdeaListItem = React.createClass({
    displayName: 'IdeaListItem',
    getInitialState: function(){
      return {
        ideas : {}
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
      var idea = this.props.idea;
      return (
        <div className='col-sm-6 col-xs-12 col-md-4'>
          <Link to={'/idea/' + idea._id}>
            <div className='row idea-hover-row clouds-bg'>
              <div className='col-xs-12 pucmm-bg'>
                <h4 className='text-center center-block disabled'>{idea.name}</h4>
              </div>
              <div className='col-xs-12 flex-container no-padding-side'>
                <div className='col-sm-3 col-xs-2 no-padding-side img-idea-parent'>
                  {/*My Image here:*/}
                  <img src={idea.img_url} className='img-idea' alt="imagen"/>
                </div>
                <div className='col-sm-7 col-xs-6 text-center text-center-vertical'>
                  <p>{idea.problem_solved}</p>
                </div>
                <div className='col-xs-2 col-sm-1 no-padding-side flex-container'>
                  {/*Like button:*/}
                  <div href='#' className='btn btn-block'>
                    {idea.meta.likes}
                    <br/>
                    <i className="fa fa-thumbs-up" aria-hidden="true"></i>
                  </div>
                </div>
                <div className='col-xs-2 col-sm-1 no-padding-side flex-container'>
                  {/*Like button:*/}
                  <div href='#' className='btn btn-block'>
                    {idea.meta.dislikes}
                    <br/>
                    <i className="fa fa-thumbs-down" aria-hidden="true"></i>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </div>
      );
    }

});
