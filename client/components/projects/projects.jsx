import React from 'react';
import {Link} from 'react-router';

export var Projects = React.createClass({
  getInitialState(){
    return{
      projects: [],
    };
  },
  componentDidMount: function() {
    this.loadProjects();
  },
  loadProjects: function(){
    var component = this;
    console.log(component.props.params.ideaId);
    $.ajax({
      url: '/api/project',
      dataType: 'json',
      method: 'GET',
      success: function(data){
        console.log(data);
        component.setState({
          projects: data
        });
      },
      error: function(err){
        console.log(err);
      }
    });
  },
  render: function() {
    var project_show = this.state.projects.map(function(project){
      var mentores = project.mentors.map(function(mentor){
        return (
          <li className='list-group-item'>{mentor}</li>
        );
      });

      var personales = project.personal.map(function(personal){
        return (
          <li >{personal}</li>
        );
      });

      return(
        <div className="container idea-container" key={project._id}>
          <div className="row flex-container project-divisor">
                <div className="col-xs-3 img-idea-parent col-md-2 flex-item">
                  <img className="img-idea"
                    src={project.idea.img_url}/>
                </div>
                <div className="col-xs-9 col-md-10 flex-item flex-col">
                  <div className='row pucmm-bg'>
                    <div className='col-xs-12'>
                      <h2>{project.idea.name}</h2>
                    </div>
                  </div>
                  <div className='row' style={{backgroundColor:"#e0f2f2"}}>
                    <div className='col-xs-12'>
                      <h4>{project.idea.info}</h4>
                    </div>
                  </div>
                </div>
          </div>
          <div className='row'>
            <div className='col-xs-12'>
              <h4>Mentor en Jefe:</h4>
              <ul className='list-group'>
                <li  className='list-group-item pucmm-bg'><span>{project.leader.name}<small> | {project.leader.occupation}</small></span></li>
              </ul>
            </div>
            <div className='col-xs-12'>
              <h4>Mentor(es):</h4>
              <ul className='list-group'>{mentores}</ul>
            </div>
            <div className='col-xs-12'>
              <h4>Notas Personales</h4>
              <ul>
                  {personales}
              </ul>
            </div>
            <div className='col-xs-12'>
              <h4>Etapas del Proyecto</h4>
              <div className='col-xs-3 text-center'><h5>Aprovacion</h5></div>
              <div className='col-xs-3 text-center'><h5>Refuerzo</h5></div>
              <div className='col-xs-3 text-center'><h5>Evaluacion</h5></div>
              <div className='col-xs-3 text-center'><h5>Ejecucion</h5></div>
              <div className='col-xs-12'>
                <div className="progress">
                  <div className="progress-bar progress-bar-primary"
                    role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"
                    style={{width: '25%'}}>
                    <span className="sr-only">25% Complete (success)</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    });
    return (
      <div>{project_show}</div>
    );
  }
});
