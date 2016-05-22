import React from 'react';

export var IdeaComment = React.createClass({
    displayName: 'IdeaComment',

    render: function(){
        var comment = this.props.comment;

        return (
            <div className='row  comment-node'>
              <div className='col-xs-12 flex-container no-padding-side'>
                <div className='col-xs-1 no-padding-side flex-item comment-like flex-center'>
                  <i className={"center-block fa fa-2x " + (comment.like ? "fa-thumbs-up" : "fa-thumbs-down")}></i>
                </div>
                <div className='col-xs-10 flex-item comment-comment flex-center'>
                  <p style={{marginBottom: '0px'}} className='text-center center-block '>{comment.comment}</p>
                </div>
                <div className='col-xs-1'></div>
              </div>
            </div>
        );
    }
});
