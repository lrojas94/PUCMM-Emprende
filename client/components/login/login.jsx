import React from 'react';

export var Login = React.createClass({
    displayName: 'Login',
    render: function(){
        return (
          <div className="modal fade" tabindex="-1" role="dialog" id='loginModal'>
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                  <h4 className="modal-title">Autenticacion</h4>
                </div>
                <form onClick={this.login}>
                  <div className="modal-body">
                    <div className="form-group">
                      <label htmlFor="username-field">Nombre de Usuario</label>
                      <input id='username-field' type="text" className='form-control'/>
                    </div>
                    <div className="form-group">
                      <label htmlFor="password-field">Contrasena</label>
                      <input id='password-field' type="text" className='form-control'/>
                    </div>
                  </div>
                  <div className="modal-footer">
                    <input type="submit" className='btn btn-success btn-block' value='Iniciar Sesion'/>
                  </div>

                </form>
              </div>{/*Modal Content*/}
            </div>{/*Modal Dialog*/}
          </div>/*Modal End*/
        );
    }
});
