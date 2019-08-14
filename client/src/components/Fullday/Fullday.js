import React from 'react';
import SlideFullDay from '../SlideFullDay/SlideFullDay';
function Fullday() {
    return (

<div>
<SlideFullDay/>
<form action="#"><p  id="orange"></p></form>
<h5 id="card">Tours día completo</h5>
<form action="#"><p id="orange"></p></form>

<div className="row">
  
  <div className="col s4">
    <div className="card">
      <div className="card-image">
        <img src="images/laguna-azul.jpg"/>
        <span className="card-title">Laguna Azul - Sauce</span>
      </div>
      <div className="card-content">
              • Recojo y traslado del Hotel.<br/>
              • Guía, Almuerzo a la carta.<br/>
              • Degustación de Tragos Exóticos, Paseo en Bote.<br/>
              • Paseo en Caballo, Fundo Privado.<br/>
              • Tour exclusivo de 9:00am. - 6:00pm.<br/>
              • Guía Turístico. <br/>
              <br/>
              <br/>
              <br/>
  
      </div>
      <div className="card-action">
        <a href="#">Precio S/.80.00 <i className="fas fa-user"></i></a>
      </div> 
    </div>
  </div>

     <div className="col s4">
      <div className="card">
        <div className="card-image">
          <img src="images/alto-mayo-moyobamba-rioja-tarapoto-peru.jpg"/>
          <span className="card-title">Alto Mayo - Moyobamba</span>
        </div>
        <div className="card-content">
              • Incluye Entradas <br/>
              • Guía Turístico.<br/>
              • Recojo y traslado del Hotel.<br/>
              • Visita al centro de Orquidiario.<br/>
              • Parada en el naciente del rio TIO YACU distrito de Jerusalén.<br/>
              • Almuerzo a la carta.<br/>
              • Conocer Rioja para visitar el CHUCHUCENTER.<br/>
              • Baños termales SAN MATEO. <br/>
              • Tour exclusivo dese las 8:00am - 6:30pm.
        </div>
        <div className="card-action">
            <a href="#">Precio S/.120.00 <i className="fas fa-user"></i></a>
        </div> 
      </div>
    </div>

    <div className="col s4" id = "right">
      <div className="card">
        <div className="card-image">
          <img src="images/tour-pishurayacu-3.jpg"/>
          <span className="card-title"> Cataratas de Pishurayacu</span>
        </div>
        <div className="card-content">
              • Incluye las entradas. <br/>
              • Guía Turístico.<br/>
              • Caminata en medio de la vegetación por aproximadamente de 50 min.<br/>
              • Disfrutaran con divercidad de flora y fauna silvestre,.<br/>
              • Baños termale San Jose y la cascada PISHURAYACU,.<br/>
              • Tour exclusivo desde 9:00am - 5:00pm. <br/>
              <br/>
              <br/>
              <br/>
        </div>
        <div className="card-action">
            <a href="#">Precio S/.80.00 <i className="fas fa-user"></i></a>
          </div> 
      </div>
    </div>
  </div>

</div>
);
}

export default Fullday;