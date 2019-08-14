import React from 'react';
import SlideHalfDay from '../SlideHalfDay/SlideHalfDay';
function Halfday() {
    return (

<div>
<SlideHalfDay/>
<form action="#"><p  id="orange"></p></form>
  <h5 id="card">Tours de Media día</h5>
<form action="#"><p  id="orange"></p></form>
<div className="row">
    <div className="col s4" id = "right">
      <div className="card">
        <div className="card-image">
          <img src="images/Lamas3.jpg"/>
          <span className="card-title">LAMAS</span>
        </div>
        <div className="card-content">
                • Incluye las entradas.<br/>
                • Visita al Museo.<br/>
                • Castillo de Lamas.<br/>
                • Vista al mirador.<br/>
                • Recorrido por el centro de la ciudad y parada en la Plaza de Armas.<br/>
                • Visita al Barrio Nativo Quechua Wayku.<br/>
                • Recojo y traslado del Hotel.<br/>
                • Tour exclusivo por las tardes de 3:00 - 6:30pm.<br/>
                • Guía Turístico.
        </div>
        <div className="card-action">
          <a href="#">Precio S/.35.00 <i className="fas fa-user"></i></a>
        </div> 
      </div>
    </div>

       <div className="col s4" id = "right">
        <div className="card">
          <div className="card-image">
            <img src="images/cataratas-de-Ahuashiyacu.jpg"/>
            <span className="card-title">Cataratas del Ahuashiyacu</span>
          </div>
          <div className="card-content">
                • Incluye Entrada <br/>
                • Guía Turístico.<br/>
                • Parada en el mirador.<br/>
                • Caminata de 10 minutos hacia las cataratas.<br/>
                • Baño en las aguas cristalinas.<br/>
                • Recojo y traslado del Hotel.<br/>
                • Tour exclusivo por las mañanas de 10:00am. - 1:00pm. <br/>
                <br/>
                <br/>
          </div>
          <div className="card-action">
              <a href="#">Precio S/.35.00 <i className="fas fa-user"></i></a>
          </div> 
        </div>
      </div>
     
      <div className="col s4" id = "right">
        <div className="card">
          <div className="card-image">
            <img src="images/plazamayor.JPG"/>
            <span className="card-title"> City Tours</span>
          </div>
          <div className="card-content">
                • Incluye las entradas. <br/>
                • Guía Turístico.<br/>
                • Fábr/ica de Cacao.<br/>
                • Fábr/ica de Puros.<br/>
                • Zoológico donde se apreciara la flora y fauna silvestre.<br/>
                • Visita al mercado popular.<br/>
                • Tour exclusivo por las mañanas de 10:00 - 1:00pm. <br/>
                <br/>
                <br/>
          </div>
          <div className="card-action">
              <a href="#">Precio S/.50.00 <i className="fas fa-user"></i></a>
            </div> 
        </div>
      </div>
    </div>
    </div>
    );
}

export default Halfday;
