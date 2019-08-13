import React from 'react';
import SlideConference from '../SlideConference/SlideConference';
function ConferenceRoom() {
    return (
<div>
  <SlideConference/>
<form action="#"><p  id="orange"></p></form>
<div className="row" id="room-div">
    <div className="col s4" id = "right">
        <img src="/auditorios/ConferenceRoom-HotelFatimaInn1.jpg" height="200"/>
    </div>
    <div className="col s4" id = "right">
      
        <h1 className="size-override">Auditorio Económica</h1>
        <p>• Ventilador<br/>
        • 02 Micrófonos Inalambr/ico<br/>
        • WiFi gratis<br/>
        • 01 Equipo de audio y sonido<br/>
        •	01 Laptop Para Expositor<br/></p>
      
        <form action="#"><p  id="orange"></p></form>
        <i className="fas fa-wifi"></i>
        <i className="fas fa-laptop"></i>
        <i className="fas fa-chair"></i>
        <i className="fas fa-tv"></i>
        <i className="fas fa-phone"></i>
        <i className="fas fa-pencil-alt"></i>
    </div>
    <div className="col s4" id = "right">
      <h1 className="size-override">Precio</h1>
      <p> S/.55.00 la hora </p>

    </div>
</div>

<form action="#"><p  id="orange"></p></form>
     
     <div className="row" id="room-div">
        <div className="col s4" id = "right">
            <img src="/auditorios/ConferenceRoom-HotelFatimaInn4.jpg" height="200"/>
        </div>
        <div className="col s4" id = "right">
            <h1 className="size-override">Auditorio Superior</h1>
            <p>• Aire Acondicionado<br/>
            • 02 Micrófonos Inalambr/ico<br/>
            • WiFi gratis<br/>
            • 01 Equipo de audio y sonido<br/>
            •	01 Laptop Para Expositor<br/></p>

            <form action="#">
                <p  id="orange"></p>
            </form>
            <i className="fas fa-wifi"></i>
            <i className="fas fa-laptop"></i>
            <i className="fas fa-chair"></i>
            <i className="fas fa-tv"></i>
            <i className="fas fa-phone"></i>
            <i className="fas fa-pencil-alt"></i>
        </div>
        <div className="col s4" id = "right">

          <h1 className="size-override">Precio</h1>
         <p> S/.70.00 la hora</p>
    
        </div>

    </div>
    
    <form action="#"><p id="orange"></p></form>
     
    <div className="row" id="room-div">
        <div className="col s4" id = "right">
          <br/>
          <br/>
            <img src="/images/Coffebreak.png" height="220"/>
        </div>
        <div className="col s4" id = "right">
            <h1 className="size-override">Coffee br/eak<br/></h1>
            <p>• Sándwich de pollo deshilachado y mayonesa o empanada de pollo.<br/>
            • Alfajor o br/ownie.<br/>
            • Café o refresco maracuya o cocona o chicha morada. </p> <br/>
            <p> • Sándwich de pollo deshilachado y mayonesa o empanada de pollo.<br/>
              • Arroz chaufa con chorizo y huevo frito.<br/>
              • Café ó chicha morada.<br/></p>
          
            <form action="#">
                <p  id="orange"></p>
              </form>
            <i className="fas fa-wifi"></i>
            <i className="fas fa-utensils"></i>
            <i className="fas fa-chair"></i>
            
        </div>
          <div className="col s4" id = "right">
            <h1 className="size-override">Precio <br/></h1>
             <p> S/.8.00 
             </p><br/><br/>
             <p> S/.10.00 </p>

        </div>
    </div>
</div>
);
}

export default ConferenceRoom;