import React from 'react';
function Booking() {
  return (
<div classNameName='row formMargin'>
      <form classNameName='col s6' id='reserve-form'>
        <h2 classNameName='user-text'>Traveler Information</h2>

        <div classNameName='input-field col s12'>
            <input placeholder='John Doe' id='full_name' type='text' classNameName='validate'/>
            <label for='full_name'><i classNameName='fas fa-user'></i> Full Name</label>
        </div>

        <div classNameName='input-field col s6'>
            <label for='email'><i classNameName='far fa-envelope'></i> Email</label>
            <input id='email' type='email' classNameName='validate'/>
        </div>

        <div classNameName='input-field col s6'>
            <label for='phone'><i classNameName='fas fa-phone'></i> Phone</label>
            <input id='phone' type='tel' classNameName='validate'/>
        </div>

        <h2 classNameName='date-text'>Travel Dates</h2>
            
        <div classNameName='col s6'>
            <label for='start-date-input' id='check_in'><i classNameName='far fa-calendar-alt'></i>Check In</label>
            <input type='date' id='start-date-input'/><br/>
        </div>

        <div classNameName='col s6'>
            <label for='end-date-input' id='check_out'><i classNameName='far fa-calendar-alt'></i>Check Out</label>
            <input type='date' id='end-date-input'/><br/>
        </div>

          <h2 classNameName='room-text'>Room Details</h2>
          
        <div classNameName='col s12'>
            <label>How many rooms?</label>
            <select classNameName='br/owser-default' id='rooms'>
              <option value='1'>1</option>
              <option value='2'>2</option>
              <option value='3'>3</option>
              <option value='4'>4</option>
            </select>
        </div>

        <div classNameName='col s6'>
            <label>How many adults?</label>
            <select classNameName='br/owser-default' id='adults'>
              <option value='1'>1 Adult</option>
              <option value='2'>2 Adults</option>
              <option value='3'>3 Adults</option>
              <option value='4'>4 Adults</option>
            </select>
        </div>

        <div classNameName='col s6'>
            <label>How many children?</label>
            <select classNameName='br/owser-default' id='children'>
              <option value='0'>0 Children</option>
              <option value='1'>1 Children</option>
              <option value='2'>2 Children</option>
            </select>
        </div>

        <div classNameName='col s12'></div>
          
          <h2 classNameName='roomtypes-text'>Room Types</h2>
          
        <div classNameName='col s6'>
            <p>
              <label>
                <input classNameName='with-gap' name='group1' type='radio' checked />
                <span id='texto'>Habitación Individual Economica</span>
              </label>
            </p>

            <p>
              <label>
                <input classNameName='with-gap' name='group2' type='radio' id='letra' />
                <span id='texto'>Habitación Matrimonial Economica</span>
              </label>
            </p>

            <p>
              <label>
                <input classNameName='with-gap' name='group3' type='radio' id='letra' />
                <span id='texto'>Habitación 2Camas Economica</span>
              </label>
            </p>

          </div>
         
          <div classNameName='col s6'>
            <p>
              <label>
                <input classNameName='with-gap' name='group4' type='radio' id='letra' />
                <span id='texto'>Habitación Individual Superior</span>
              </label>
            </p>

            <p>
              <label>
                <input classNameName='with-gap' name='group5' type='radio' id='letra' />
                <span id='texto'>Habitación Matrimonial Superior</span>
              </label>
            </p>

            <p>
              <label>
                <input classNameName='with-gap' name='group6' type='radio' id='letra' />
                <span id='texto'>Habitación 2Camas Superior</span>
              </label>
            </p>

          </div>
          <div classNameName='btn-div col s12'>
            <input id='add-event' classNameName='btn btn-info' type='submit' value='Reserva' />
          </div>
       
          <div className="btn-div col s12">
            <input id="add-event" className="btn btn-info" type="submit" value="Reserva" />
          </div>
        </form>
      
    
      <div className="col s6">

        {/* cards de contactos */}
       
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
              <a href="https://www.linkedin.com/company/fatimainn/?viewAsMember=true"><img src="/RedesSociales/in.png"width="30px" alt="30px"/></a>
              <a href="https://twitter.com/fatimainnhotel"><img src="/RedesSociales/twitter.png" width="30px" alt="30px"/></a>
              <a href="https://www.instagram.com/hotelfatimainn/"><img src="RedesSociales/instagram.png" width="30px" alt="30px"/></a>
            </p>
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
          <li><i className="fas fa-bed"></i> <i className="fas fa-bed"></i> 2 Habitaciones Dobles (1 Cama de 2 Plazas y 1 Cama de 1 ½ Plaza)</li>
          <li><i className="fas fa-bed"></i> <i className="fas fa-bed"></i> <i className="fas fa-bed"></i> 1 Habitación Triple (2 Camas de 2 Plazas c/u y 1 Cama de 1½ Plaza) </li>
      </div>
    </div>

</div>

    );
}
export default Booking;