import React from 'react';
function Card() {
  return (
<div>
<div className="row">
  <div className="col s6 m6" id = "right">
    <h3 className="header">Habitaciones y Precios</h3>
    <div id = "hotel-results">
    <div className="card horizontal" id="orange">
      <div className="card-image">
        <img src="/images/HMatrimonial3.JPG"/>
      </div>
      <div className="card-stacked">
        <div className="card-content">
            Contamos con habitaciones Matrimoniales, Individuales y 2 Camas
            con toda las necesidades que requieren nuestros huéspedes. Para 
            nuestras reservaciones directas siempre contamos con 
            grandes descuentos en alojamiento y servicio de Tours.
        </div>
        <div className="card-action">
          <a href="/habitaciones">Más</a>
        </div>
      </div>
    </div>
  </div>
  </div>

  <div className="col s6 m6" id = "Left">
    <h3 className="header">Ubicación</h3>
    <div id="events-results">
    <div className="card horizontal" id="orange">
      <div className="card-image">
        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15857.07781299555!2d-76.3608079!3d-6.4875231!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x3a86d70e51c3a2db!2sFatima+Camila+Inn!5e0!3m2!1sen!2sus!4v1565311612175!5m2!1sen!2sus" width="368" height="240" frameborder="0" style={{border: 0}} allowfullscreen></iframe>
      </div>
      <div className="card-stacked">
        <div className="card-content">
              Hotel Fatima Inn. está ubicado a media cuadra de la Plaza de Armas, 
              zona céntrica de la ciudad de Tarapoto, por lo tanto, nuestros huéspedes 
              tienen una ubicación privilegiada para movilizarse durante el dia y noche 
              con total seguridad.
        </div>
          <div className="card-action" id="map-link">
            <a href="https://www.google.com/maps/place/Fatima+Camila+Inn/@-6.4875231,-76.3608079,15z/data=!4m8!3m7!1s0x0:0x3a86d70e51c3a2db!5m2!4m1!1i2!8m2!3d-6.4875231!4d-76.3608079">Más</a>
          </div>
        </div>

      </div>
    </div>
  </div>
</div>

<div className="row">
  <div className="col s6 m6" id = "right">
    <h3 className="header">Nuestra Propiedad</h3>
    <div id = "hotel-results">
    <div className="card horizontal" id="orange">
      <div className="card-image">
        <img src="/images/Reception-HotelFatimaInn2.jpg"/>
      </div>
      <div className="card-stacked">
        <div className="card-content">
           El Hotel Fatima Inn. es un edificio de 5 pisos
           de infraestructura moderna y para la seguridad de todos contamos
           en las areas comunes camaras de seguridad las 24 horas. Además,
           los años actualizamos nuestras habitaciones con el proposito de 
           dar un buen servicio y hacer que los huéspedes se sientan como en casa.
        </div>
        <div className="card-action">
            <a href="/explore">Más</a>
          </div>
      </div>
    </div>
  </div>
  </div>

  <div className="col s6 m6" id = "Left">
    <h3 className="header">Sala de Conferencia</h3>
    <div id="events-results">
    <div className="card horizontal" id="orange">
      <div className="card-image">
        <img src="/images/Auditorio2-FatimaInnHotel.jpg"/>
      </div>
      <div className="card-stacked">
        <div className="card-content">
              Contamos con 2 amplios Audutorios con todo lo moderno
              para que realizen sus eventos, charlas, capacitaciones, 
              pesentaciones de productos, etc con una capacidad de 120 
              personas, además de regalarles publicidad gratuita 
              en toda nuestras plataformas de facebook, twitter, Instagram.
        </div>
        <div className="card-action">
          <a href="/auditorio">Más</a>
        </div>
      </div>
    </div>
  </div>
</div>
</div>
      </div>
);
}

export default Card;