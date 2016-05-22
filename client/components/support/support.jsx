import React from 'react';
import {Link} from 'react-router';

export var Support = React.createClass({
  render: function() {
    return (
			<div className="container" style={{backgroundColor:"#e0f2f2"}}>
          <div style={{color:"#484848"}}><h2> Contacto a Soporte </h2></div>
          <div className="separator-div" style={{border:"1px"}}></div>
          <div style={{position:"relative"}}>
            <div><p><b>Nombre Completo:</b></p></div>
            <form>
              <div className="form-group">
                <input type="text" className="form-control"/>
              </div>
            </form>
          </div>

          <div style={{position:"relative"}}>
            <div><p><b>Correo Electronico:</b></p></div>
            <form>
              <div className="form-group">
                <input type="text" className="form-control"/>
              </div>
            </form>
          </div>

          <div style={{position:"relative"}}>
            <div><p><b>En que podemos asistirle?</b></p></div>
            <form>
              <div className="form-group">
                <textarea class="form-control" rows="5" id="comment" style={{width:"100%"}}></textarea>
              </div>
            </form>
          </div>

      </div>
    );
  }
});
