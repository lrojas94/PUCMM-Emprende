import React from 'react';

export var Login = React.createClass({
    displayName: 'Login',
    render: function(){
        return (
          <div className="modal fade" tabindex="-1" role="dialog" id='loginModal'>
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header pucmm-bg">
                  <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                  <h4 className="modal-title">Iniciar Sesion</h4>
                </div>
                <form onClick={this.login}>
                  <div className="modal-body">
                    <div className="form-group">
                      <label htmlFor="username-field"><i className="fa fa-user" aria-hidden="true"></i> Email</label>
                      <input id='username-field' placeholder='Email' type="text" className='form-control'/>
                    </div>
                    <div className="form-group">
                      <label htmlFor="password-field"><i className="fa fa-key" aria-hidden="true"></i> Contrasena</label>
                      <input id='password-field' placeholder='Contrasena' type="password" className='form-control'/>
                    </div>
                  </div>
                  <div className="modal-footer">
                    <input type="submit" id="loginBtn" className='btn btn-default btn-block' value='Iniciar Sesion'/>
                  </div>

                </form>
              </div>{/*Modal Content*/}
            </div>{/*Modal Dialog*/}
          </div>/*Modal End*/
        );
    }
});
