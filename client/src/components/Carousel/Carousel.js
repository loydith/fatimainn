import React from 'react';
function Carousel() {
  return (
    <React.Fragment>
  <div class = "container width">
  <div className= "row">
    <div className = "col s12" style={{ display: "flex" }}>
    <img className="materialboxed" width="200" height="165" src="/images/Reception-HotelFatimaInn.jpg"/>
    <img className="materialboxed" width="200" height="165" src="/images/Reception-HotelFatimaInn1.jpg"/>
    <img className="materialboxed" width="200" height="165" src="/images/Reception-HotelFatimaInn2.jpg"/>
    <img className="materialboxed" width="200" height="165" src="/images/Reception-HotelFatimaInn4.jpg"/>
    </div>
    </div>
    <div className ="row">
    <div className = "col s12" style={{ display: "flex" }}>
    <img className="materialboxed" width="200" height="165" src="/images/Reception-HotelFatimaInn7.jpg"/>
    <img className="materialboxed" width="200" height="165" src="/images/Reception-HotelFatimaInn9.jpg"/>
    <img className="materialboxed" width="200" height="165" src="/images/ComedorPrincipal-HotelFatimaInn1.jpg"/>
    <img className="materialboxed" width="200" height="165" src="/images/ComedorPrincipal-HotelFatimaInn2.jpg"/>
    
    </div>
    </div>
    <div className= "row">
    <div className = "col s12" style={{ display: "flex" }}>
    <img className="materialboxed" width="200" height="165" src="/images/DesayunoGourmet-FatimaInn1.jpg"/>
    <img className="materialboxed" width="200" height="165" src="/auditorios/ConferenceRoom-HotelFatimaInn1.jpg"/>
    <img className="materialboxed" width="200" height="165" src="/auditorios/ConferenceRoom-HotelFatimaInn2.jpg"/>
    <img className="materialboxed" width="200" height="165" src="/images/FrontDoor-HotelFatima.jpg"/>

    </div>
    </div>
    </div>

    </React.Fragment>
  );
}

export default Carousel;