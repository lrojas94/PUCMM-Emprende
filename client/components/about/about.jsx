import React from 'react';
import {Link} from 'react-router';

export var About = React.createClass({
  render: function() {
    return (
			<div className="container">
        <div>
          <h2 style={{color:"#1066a4"}}><b>Sobre PUCMM</b></h2>
          <div className="separator-div"/>
          <p style={{textAlign:"justify"}}>
            ​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​La Pontificia Universidad Católica Madre y Maestra (PUCMM) es una institución católica,
            no estatal, de servicio a la comunidad. Fue creada por la Conferencia del ​Episcopado Dominicano,
            el 9 de septiembre de 1962. Es una institución de educación superior que hace hincapié en la excelencia
            académica y que está abierta a todas las personas sin distinción de raza, clase social, ideología o
            creencias religiosas. Se enfoca en la búsqueda científica de soluciones que respondan a los problemas
            sociales y las exigencias del bien común.​
          </p>
          <p style={{textAlign:"justify"}}>
            Donec quis arcu arcu. Integer eleifend vulputate iaculis. Mauris imperdiet turpis a commodo lacinia. Proin
            dapibus, purus euismod sodales maximus, augue augue volutpat nulla, quis vulputate dolor lectus vitae ipsum.
            Aliquam mi enim, luctus at tempus nec, porta vitae nisl. Nam eget venenatis justo. Mauris a laoreet est.
            Suspendisse lorem elit, finibus a iaculis nec, pretium ut turpis. Mauris risus magna, sodales vel erat sed,
            feugiat accumsan odio. Nunc sodales luctus justo, sed dapibus erat vestibulum sit amet. Duis sagittis tortor
             vitae lacus hendrerit, vel mattis erat euismod. Sed aliquam eget ex eu lobortis. Morbi elit urna, rutrum et orci eu,
             placerat tempor lorem. Vestibulum mattis sapien nec felis tincidunt, quis faucibus orci pulvinar.
          </p>
        </div>
        <div>
          <h2 style={{color:"#1066a4"}}><b>PUCMM Emprende</b></h2>
          <div className="separator-div"/>
          <p style={{textAlign:"justify"}}>
            PUCMM Emprende brinda un espacio para generar y fortalecer la cultura de
            emprendimiento en la comunidad de la Pontificia Universidad Católica Madre
            y Maestra. Involucrando tanto profesores como estudiantes, promueve el desarrollo
            y seguimiento constante de nuevas ideas que proponen mejorar la comunidad
            dominicana, generando nuevos empleos y promoviendo el avance tanto tecnologico
            como social de la Republica Dominicana.
          </p>
        </div>
			</div>
    );
  }
});
