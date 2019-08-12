import React from 'react';
function Rooms(props) {
  const handleReservations = (event) => {
    event.preventDefault();
  }
  return (
<div>
<form action="#">
      <p  id="roomLine"></p>
  </form>
  <div className="row" id="room-div">
        <div className="col s4" id = "right">
          <img src="/images/HIndividual1.jpg" height="200"/>
        </div>
      <div className="col s4" id = "right">
        <h1 className="card-title">Individual Económica</h1>
                <p>
                • Ventilador<br/>
                • Desayuno Continental<br/>
                • WiFi gratis<br/>
                • Taxi de recojo<br/>
                </p>
        <form action="#"><p id="orange"></p></form>
                <i className="fas fa-wifi"></i>
                <i className="fas fa-tv"></i>
                <i className="fas fa-bed"></i>
                <i className="fas fa-shower"></i>
                <i className="fas fa-phone"></i>
                <i className="fas fa-utensils"></i>
                <i className="fas fa-taxi"></i>
      </div>

    <div className="col s4" id = "right">
      <h1 className="card-title">Más</h1>
    </div>
    <div id="modal1" className="modal">
      <div className="modal-content">
        <img src="/images/HIndividual1.jpg" height="200"/>
        <img src="/images/Restroom-HotelFatimaInn.jpg" height="200"/>
      </div>

  <div className="col s4">
    <h1 className="card-title">Individual Económica</h1>
      • Ventilador<br/>
      • Desayuno Continental.<br/>
      • WiFi gratis.<br/>
      • TV Pantalla Plana.<br/>
      • Teléfono, Cable.<br/>
      • Agua Caliente.<br/>
      • Reloj, Despertador y Radio.<br/>
      • Baño privado con ducha. <br/>
      • Jabón y shampoo.<br/>
      • Papel higiénico.<br/>
      • Toallas de mano, cabello y cuerpo.<br/>
      • Taxi de recojo.<br/>
                
      <form action="#"><p  id="orange"></p></form>

                <i className="fas fa-wifi"></i>
                <i className="fas fa-tv"></i>
                <i className="fas fa-bed"></i>
                <i className="fas fa-shower"></i>
                <i className="fas fa-phone"></i>
                <i className="fas fa-utensils"></i>
                <i className="fas fa-taxi"></i>
</div>

  <div className="col s4" id = "right">
      <h1 className="card-title">Precio</h1>
      S/.80.00<br/>
  </div>
    <div className="modal-footer">
      <a href="#!" className="modal-close waves-effect waves-green btn-flat">Cerrar</a>
    </div>
</div>
<a data-target="modal1" className="btn modal-trigger btn-floating btn-large waves-effect waves-light orange"><i className="material-icons">add</i></a>
</div>
    

<form action="#"><p  id="orange"></p></form>
             
<div className="row" id="room-div">
      <div className="col s4" id = "right">
        <img src="/images/HIndividual2.jpg" height="200"/>
      </div>
    <div className="col s4" id = "right">
      <h1 className="card-title">Individual Superior</h1>
                    <p>
                    • Aire Acondicionado<br/>
                    • Desayuno Continental<br/>
                    • WiFi gratis<br/>
                    • Taxi de recojo<br/></p>
        <form action="#"><p  id="orange"></p></form>
                  
                    <i className="fas fa-wifi"></i>
                    <i className="fas fa-tv"></i>
                    <i className="fas fa-bed"></i>
                    <i className="fas fa-shower"></i>
                    <i className="fas fa-phone"></i>
                    <i className="fas fa-utensils"></i>
                    <i className="fas fa-taxi"></i>

    </div>
    <div className="col s4" id = "right">
        <h1 className="card-title">Más</h1>
    </div>
    <div id="modal" className="modal">
  <div className="modal-content">
      <img src="/images/HIndividual1.jpg" height="200"/>
      <img src="/images/Restroom1-HotelFatimaInn.jpg" height="200"/>
    </div>
  <div className="col s4">
      <h1 className="card-title">Individual Superior</h1>
                • Aire Acondicionado<br/>
                • Desayuno Continental.<br/>
                • WiFi gratis.<br/>
                • TV Pantalla Plana.<br/>
                • Teléfono, Cable.<br/>
                • Agua Caliente.<br/>
                • Reloj, Despertador y Radio.<br/>
                • Baño privado con ducha. <br/>
                • Jabón y shampoo.<br/>
                • Papel higiénico.<br/>
                • Toallas de mano, cabello y cuerpo.<br/>
                • Taxi de recojo.
                
       <form action="#"><p id="orange"></p></form>
                <i className="fas fa-wifi"></i>
                <i className="fas fa-tv"></i>
                <i className="fas fa-bed"></i>
                <i className="fas fa-shower"></i>
                <i className="fas fa-phone"></i>
                <i className="fas fa-utensils"></i>
                <i className="fas fa-taxi"></i>
    </div>
            <div className="col s4" id = "right">
              <h1 className="card-title">Precio</h1>
              S/.95.00<br/>
            </div>
    <div className="modal-footer">
      <a href="#!" className="modal-close waves-effect waves-green btn-flat">Cerrar</a>
    </div>
</div>
<a data-target="modal" className="btn modal-trigger btn-floating btn-large waves-effect waves-light orange" ><i className="material-icons">add</i></a>
</div>
  
  <form action="#"><p id="orange"></p> </form>

    <div className="row" id="room-div">
        <div className="col s4" id = "right">
          <img src="/images/HMatrimonial3.JPG" height="200"/>
        </div>
      <div className="col s4" id = "right">
          <h1 className="card-title">Matrimonial Económica</h1>
                        <p>
                        • Ventilador<br/>
                        • Desayuno Continental<br/>
                        • WiFi gratis<br/>
                        • Taxi de recojo<br/></p>
          <form action="#"><p id="orange"></p></form>
                        <i className="fas fa-wifi"></i>
                        <i className="fas fa-tv"></i>
                        <i className="fas fa-bed"></i>
                        <i className="fas fa-shower"></i>
                        <i className="fas fa-phone"></i>
                        <i className="fas fa-utensils"></i>
                        <i className="fas fa-taxi"></i>
      </div>
      <div className="col s4" id = "right">
        <h1 className="card-title">Más</h1>
      </div>
      <div id="modal2" className="modal">
    <div className="modal-content">
      <img src="/images/HMatrimonial3.jpg" height="200"/>
      <img src="/images/Restroom1-HotelFatimaInn.jpg" height="200"/>
    </div>
    <div className="col s4">
      <h1 className="card-title">Matrimonial Económica</h1>
                • Ventilador<br/>
                • Desayuno Continental.<br/>
                • FrioBar.<br/>
                • Escritorio.<br/>
                • WiFi gratis.<br/>
                • TV Pantalla Plana.<br/>
                • Teléfono, Cable.<br/>
                • Agua Caliente.<br/>
                • Reloj, Despertador y Radio.<br/>
                • Baño privado con ducha. <br/>
                • Jabón y shampoo.<br/>
                • Papel higiénico.<br/>
                • Toallas de mano, cabello y cuerpo.<br/>
                • Taxi de recojo.  
      <form action="#"><p id="orange"></p></form>
                <i className="fas fa-wifi"></i>
                <i className="fas fa-tv"></i>
                <i className="fas fa-bed"></i>
                <i className="fas fa-shower"></i>
                <i className="fas fa-phone"></i>
                <i className="fas fa-utensils"></i>
                <i className="fas fa-taxi"></i>
      </div>
    <div className="col s4" id = "right">
        <h1 className="card-title">Precio</h1>
              S/.100.00<br/>
    </div>
    <div className="modal-footer">
      <a href="#!" className="modal-close waves-effect waves-green btn-flat">Cerrar</a>
    </div>
</div>
<a data-target="modal2" className="btn modal-trigger btn-floating btn-large waves-effect waves-light orange" ><i className="material-icons">add</i></a>
</div>

  <form action="#"><p  id="orange"></p></form>
            
  <div className="row" id="room-div">
      <div className="col s4" id = "right">
          <img src="/images/HMatrimonial4.JPG" height="200"/>
      </div>
    <div className="col s4" id = "right">
        <h1 className="card-title">Matrimonial Superior</h1>
                        <p>
                        • Aire Acondicionado<br/>
                        • Desayuno Continental<br/>
                        • WiFi gratis<br/>
                        • Taxi de recojo<br/></p>

            <form action="#"><p id="orange"></p></form>
                        <i className="fas fa-wifi"></i>
                        <i className="fas fa-tv"></i>
                        <i className="fas fa-bed"></i>
                        <i className="fas fa-shower"></i>
                        <i className="fas fa-phone"></i>
                        <i className="fas fa-utensils"></i>
                        <i className="fas fa-taxi"></i>
    </div>
    <div className="col s4" id = "right">
      <h1 className="card-title">Más</h1>
    </div>
    <div id="modal3" className="modal">
    <div className="modal-content">
          <img src="/images/HMatrimonial2.jpg" height="200"/>
          <img src="/images/Restroom1-HotelFatimaInn.jpg" height="200"/>
      </div>
   <div className="col s4">
      <h1 className="card-title">Matrimonial Superior</h1>
                              • Aire Acondicionado.<br/>
                              • Desayuno Continental.<br/>
                              • FrioBar.<br/>
                              • WiFi gratis.<br/>
                              • TV Pantalla Plana.<br/>
                              • Teléfono, Cable.<br/>
                              • Agua Caliente.<br/>
                              • Reloj, Despertador y Radio.<br/>
                              • Baño privado con ducha. <br/>
                              • Jabón y shampoo.<br/>
                              • Papel higiénico.<br/>
                              • Toallas de mano, cabello y cuerpo.<br/>
                              • Taxi de recojo.
                              
      <form action="#"><p id="orange"></p></form>
                              <i className="fas fa-wifi"></i>
                              <i className="fas fa-tv"></i>
                              <i className="fas fa-bed"></i>
                              <i className="fas fa-shower"></i>
                              <i className="fas fa-phone"></i>
                              <i className="fas fa-utensils"></i>
                              <i className="fas fa-taxi"></i>
                          </div>
                  <div className="col s4" id = "right">
                      <h1 className="card-title">Precio</h1>
                            S/.130.00<br/>
                  </div>
                  <div className="modal-footer">
                    <a href="#!" className="modal-close waves-effect waves-green btn-flat">Cerrar</a>
                  </div>
              </div>
<a data-target="modal3" className="btn modal-trigger btn-floating btn-large waves-effect waves-light orange" ><i className="material-icons">add</i></a>

  </div>
  
<form action="#"><p  id="orange"></p></form>
  
  <div className="row" id="room-div">
      <div className="col s4" id = "right">
        <img src="/images/Hab2Camas1.JPG" height="200"/>
      </div>
    <div className="col s4" id = "right">
        <h1 className="card-title">2 Camas Económica</h1>
                        <p>• Ventilador<br/>
                        • Desayuno Continental<br/>
                        • WiFi gratis<br/>
                        • Taxi de recojo<br/> </p>
          <form action="#"><p id="orange"></p></form>
                        <i className="fas fa-wifi"></i>
                        <i className="fas fa-tv"></i>
                        <i className="fas fa-bed"></i>
                        <i className="fas fa-shower"></i>
                        <i className="fas fa-phone"></i>
                        <i className="fas fa-utensils"></i>
                        <i className="fas fa-taxi"></i>
    </div>
      <div className="col s4" id = "right">
          <h1 className="card-title">Más</h1>
      </div>
      <div id="modal4" className="modal">
    <div className="modal-content">
      <img src="/images/Hab2Camas2.jpg" height="200"/>
      <img src="/images/Restroom1-HotelFatimaInn.jpg" height="200"/>
    </div>
    <div className="col s4">
    <h1 className="card-title">2 Camas Económica</h1>
                              • Ventilador<br/>
                              • Desayuno Continental.<br/>
                              • FrioBar.<br/>
                              • WiFi gratis.<br/>
                              • TV Pantalla Plana.<br/>
                              • Teléfono, Cable.<br/>
                              • Agua Caliente.<br/>
                              • Reloj, Despertador y Radio.<br/>
                              • Baño privado con ducha. <br/>
                              • Jabón y shampoo.<br/>
                              • Papel higiénico.<br/>
                              • Toallas de mano, cabello y cuerpo.<br/>
                              • Taxi de recojo.              
        <form action="#"><p id="orange"></p></form>
                              <i className="fas fa-wifi"></i>
                              <i className="fas fa-tv"></i>
                              <i className="fas fa-bed"></i>
                              <i className="fas fa-shower"></i>
                              <i className="fas fa-phone"></i>
                              <i className="fas fa-utensils"></i>
                              <i className="fas fa-taxi"></i>
      </div>
    <div className="col s4" id = "right">
      <h1 className="card-title">Precio</h1>
                  S/.110.00<br/>
    </div>
  <div className="modal-footer">
    <a href="#!" className="modal-close waves-effect waves-green btn-flat">Cerrar</a>
  </div>
</div>
<a data-target="modal4" className="btn modal-trigger btn-floating btn-large waves-effect waves-light orange" ><i className="material-icons">add</i></a>
</div>

  
  <form action="#"><p id="orange"></p></form>

  <div className="row" id="room-div">
     <div className="col s4" id = "right">
            <img src="/images/Hab2Camas2.JPG" height="200"/>
    </div>
        <div className="col s4" id = "right">
          <h1 className="card-title">2 Camas Superior</h1>
                        <p>
                        • Aire Acondicionado<br/>
                        • Desayuno Continental<br/>
                        • WiFi gratis<br/>
                        • Taxi de recojo<br/></p>
              <form action="#"><p  id="orange"></p></form>

                        <i className="fas fa-wifi"></i>
                        <i className="fas fa-tv"></i>
                        <i className="fas fa-bed"></i>
                        <i className="fas fa-shower"></i>
                        <i className="fas fa-phone"></i>
                        <i className="fas fa-utensils"></i>
                        <i className="fas fa-taxi"></i>
        </div>
          <div className="col s4" id = "right">
            <h1 className="card-title">Más</h1>
          </div>
          <a data-target="modal4" className="btn modal-trigger btn-floating btn-large waves-effect waves-light orange" ><i className="material-icons">add</i></a>
</div>
</div>
  );
}
export default Rooms;