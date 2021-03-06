import React from 'react';
import Carousel from '../../components/Carousel'
import Iframe from 'react-iframe'

function Explore() {
  return (
    <div className="container width">
     
      <h5 id="card">Fatima Inn</h5>
      <br />
      <p>
      Fatima Inn. fue creada para pasajeros Ejecutivos y Turistas en general.
      Tiene una ubicacion privilegiada en el Centro de la Ciudad de Tarapoto a
      solo media cuadra de la Plaza de Armas que permite a nuestros huéspedes
      tener un desplazamiento seguro, placentero y libre de estres dentro de la ciudad.
      El edificio cuenta con 5 pisos y su infraestructura moderna y seguridad nos hace
      pioneros en cubrir muchas reservas durante todo el año. Además, contamos con sala
      de recepcion elegante y LapTops para su uso durante su estadia. Tambien, contamos con
      un amplio comedor principal para el Desayuno Continental en las mañanas.
      Para la seguirdad de su estadia contamos en las areas comunes camaras de seguridad las
      24 horas. Asi mismo, informarles que todo los años actualizamos nuestros ambientes
    con el proposito de darles un servicio de calidad y hacemos que los huéspedes.<br />
      Fatima Inn, cuenta ademas con 2 amplios Salas de Conferencia con infraestuctura moderna
      disponibles para sus eventos, charlas, capacitaciones, entrenamientos, etc. solo debe contactarnos las 24 horas
      horas para realizar su reserva.
    </p>
    <Carousel/>
    <br></br>
<div style={{ width: "100%",  }}>
<Iframe url="forecast.html"
  frameBorder={0}
  width="100%"
  height="450px"
  display="initial"
  position="relative" />    
    </div>
    </div>
  );
}
export default Explore;
