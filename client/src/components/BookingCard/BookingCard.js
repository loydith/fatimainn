import React from 'react';
function BookingCard() {
    return (
<div>
    <div className="col s6">
        
        <div className="col s12">
          <div className="card blue-light darken-1" id="card">
            <h4 className="card-title"><img src="/RedesSociales/phone.png" width="30px" alt="30px"/>Contactos</h4>
              +(51) 042 566 359 <br/>
              +(51) 942 889 047 <br/>
              +(51) 986 585 921 <br/>
              +1 804-4775524 English
          </div>
        </div>

        <div className="col s12">
          <div className="card blue-light darken-1" id="card">
            <h1 className="card-title">Redes Sociales</h1>
            <p>
              <a href="mailto:loydith@gmail.com">ventas@fatimacamilainn.com</a><br/><br/>
              <a href="mailto:loydith@gmail.com"><img src="/RedesSociales/email.png" width="30px" alt="30px"/></a>
              <a href="https://www.facebook.com/fatimainnhotel"><img src="/RedesSociales/facebook.png" width="30px" alt="30px"/></a>
              <a href="https://www.linkedin.com/company/fatimainn/?viewAsMember=true"><img src="/RedesSociales/in.png" width="30px" alt="30px"/></a>
              <a href="https://twitter.com/fatimainnhotel"><img src="/RedesSociales/twitter.png" width="30px" alt="30px"/></a>
              <a href="https://www.instagram.com/hotelfatimainn/"><img src="RedesSociales/instagram.png" width="30px" alt="30px"/></a>
            </p>
          </div>
        </div>
      </div>
    
    <div className="col s6" id="info-text">
        <h1 className="card-title">Politicas del Hotel</h1>
      
          <li><i className="far fa-calendar-alt"></i> Le informamos que la hora de ingreso “Check In” es a las 13:00pm y Salida
        “Check Out” 12:30pm</li>
          <li>En el caso si requieran extender su estancia, éste tiene un costo adicional cuyo importe es de S/.40.00</li>
          <li>Para la confirmación de su reserva deberá realizar el pago de su primera noche</li>
          <li>Debe contactarnos a ventas@fatimacamilainn.com para enviarles nuestros datos de la empresa</li>
          <li>Contamos con pago Online a través de Visa Net</li>
          <li><i className="fas fa-taxi"></i>Todas la reservaciones directas cuentan con taxi gratuito</li>
          <li>En las reservaciones grupales no aplica taxi gratuito</li>
          <li><i className="fas fa-user"></i> Cuenta con una capacidad máxima de 43 personas</li>
          <li><i className="fas fa-child"></i> <i className="fas fa-baby"></i> Niños de 0 entre 10 años no paga alojamiento <i className="fas fa-utensils"></i> solo extra S/.10 por desayuno</li>
          <li>Para reservaciones que desean toda las habitaciones contamos con precios especiales, Llamanos <i
          className="fas fa-phone"></i> +51 942889047</li>
          <li>Nos ubicamos en el centro de la ciudad, a solo pasos de la Plaza de Armas de la Ciudad de Tarapoto</li>
          <h4 className="card-title"><i className="fas fa-hotel"></i> Fátima Inn Hotel cuenta con: </h4>
          <li><i className="fas fa-bed"></i> 6 Habitaciones Individuales (Camas de 2 Plazas c/u) </li>
          <li><i className="fas fa-bed"></i> 7 Habitaciones Matrimoniales (Camas de 2 Plazas c/u) </li>
          <li><i className="fas fa-bed"></i> <i className="fas fa-bed"></i> 2 Habitaciones Dobles ( De 2 Camas de 2 plazas c/u)</li>
          <li><i className="fas fa-bed"></i> <i className="fas fa-bed"></i> 2 Habitaciones Dobles (1 Cama de 2 Plazas y 1 Cama de 1 ½
          Plaza)</li>
          <li><i className="fas fa-bed"></i> <i className="fas fa-bed"></i> <i className="fas fa-bed"></i> 1 Habitación Triple (2 Camas de
          2 Plazas c/u y 1 Cama de 1½ Plaza) </li>
    </div>
</div>
    );
}
export default BookingCard;