import React from 'react';
import {Link} from 'react-router';

export var Footer = React.createClass({
  render: function() {
    return (
			  <div className="footer-main">
          <div className="container">
            <div className="row">

               <div className="col-sm-4 col-xs-12 col-md-4">
               <br/>
                <div className="caption">
                <h4>Campus Santiago</h4>
                  <div className="separator-div-footer"></div>
                    <p>Autopista Duarte Km 1 1/2<br/>
                      Santiago, Republica Dominicana.<br/>
                      Tel: (809) 580-1962<br/>
                      Fax: (809) 582-4549
                    </p>
                </div>
               </div>

               <div className="col-sm-4 col-xs-12 col-md-4">
               <br/>
                <div className="caption">
                <h4>Campus Santo Tomas de Aquino</h4>
                  <div className="separator-div-footer"></div>
                    <p>
                      Abraham Lincoln esq. Rómulo Betancourt<br/>
                      Santo Domingo, Republica Dominicana.<br/>
                      Tel: (809) 586-2060<br/>
                      Fax: (809) 534-7060
                    </p>
                </div>
               </div>

               <div className="col-sm-4 col-xs-12 col-md-4">
               <br/>
                <div className="caption">
                <h4>Extension Puerto Plata</h4>
                  <div className="separator-div-footer"></div>
                    <p>Calle Separacion No. 2<br/>
                      Puerto Plata, Republica Dominicana.<br/>
                      Tel: (809) 586-2060<br/>
                      Fax: (809) 586-8246
                    </p>
                </div>
               </div>

            </div>
          </div>
          <div className="footer-sub">
            <p style={{textAlign:"center"}}>© Copyright 2016 Hackaton PUCMM Emprende</p>
          </div>
        </div>
    );
  }
});
