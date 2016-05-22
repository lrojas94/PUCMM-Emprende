import React from 'react';
import {Link} from 'react-router';

export var Projects = React.createClass({
  render: function() {
    return (
			<div className="container idea-container">
      {/*-------------------------This will load tables Dinamically*/}
      {/*-------------------------This is the IDEA_INFO part*/}
        <div className="row flex-container project-divisor">
              <div className="col-xs-3 img-idea-parent col-md-2 flex-item">
                <img className="img-idea"
                  src="http://bower.io/img/bower-logo.png"/>
              </div>
              <div className="col-xs-9 col-md-10 flex-item flex-col">
                <div className='row pucmm-bg'>
                  <div className='col-xs-12'>
                    <h2>Bowerito</h2>
                  </div>
                </div>
                <div className='row' style={{backgroundColor:"#e0f2f2"}}>
                  <div className='col-xs-12'>
                    <h4>Empresa de Desarrollo de Software</h4>
                  </div>
                </div>
              </div>
        </div>
        <div className='row'>
          <div className='col-xs-12'>
            <h4>Mentor en Jefe:<span className='pull-right'>Miguel German<small className='text-primary'> (Mercadologo)</small></span></h4>
          </div>
          <div className='col-xs-12'>
            <h4>Mentor(es):<span className='pull-right'>Juan Miguel</span></h4>
          </div>
          <div className='col-xs-12'>
            <h4>Notas Personales</h4>
            <ul className='list-group'>
              <li className='list-group-item'>
                Leer libro sobre Mercados <span className="label label-danger pull-right">Urgente</span>
              </li>
              <li className='list-group-item'>
                Enviar propuesta a BanReservas
              </li>
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
      {/*----------------------------------------------------------*/}
      </div>
    );
  }
});
