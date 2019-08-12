import React from 'react';
export default class Booking extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      check_out: "",
      full_name: "",
      phone: "",
      check_in: "",
      rooms: '1',
      guests_adult: '1',
      guests_child: '0',
      room_qty: '1',
      room_type: 'Habitación Individual Economica'
    }
  }
  handleReservaciones = (event) => {
    event.preventDefault();
    const allValues = Object.keys(this.state);
    let isEmpty = false;
    allValues.forEach(e => {
      if(this.state[e] === '') {
        isEmpty = true
      }
    });
    if (!isEmpty) {
      this.props.handleReservaciones(this.state);
    } else {
      console.log('Error')
    }
  }
  handleChange = (event) => {
    const { id, value } = event.target || event.srcElement;
    console.log(id, value)
    this.setState({
      [id]: value
    });
  }
  render() {
    return (
      <div className='row formMargin'>
            <form className='col s6' id='reserve-form'>
              <h2 className='user-text'>Traveler Information</h2>
              <div className='input-field col s12'>
                 <input onChange={this.handleChange} placeholder='John Doe' id='full_name' type='text' className='validate'/>
                  <label htmlFor='full_name'><i className='fas fa-user'></i> Full Name</label>
              </div>
      
              <div className='input-field col s6'>
                  <label htmlFor='email'><i className='far fa-envelope'></i> Email</label>
                 <input onChange={this.handleChange} id='email' type='email' className='validate'/>
              </div>
      
              <div className='input-field col s6'>
                  <label htmlFor='phone'><i className='fas fa-phone'></i> Phone</label>
                 <input onChange={this.handleChange} id='phone' type='tel' className='validate'/>
              </div>
      
              <h2 className='date-text'>Travel Dates</h2>
                  
              <div className='col s6'>
                  <label htmlFor='start-date-input' id='check_in'><i className='far fa-calendar-alt'></i>Check In</label>
                 <input onChange={this.handleChange} type='date' id='check_in'/><br/>
              </div>
      
              <div className='col s6'>
                  <label htmlFor='end-date-input' id='check_out'><i className='far fa-calendar-alt'></i>Check Out</label>
                 <input onChange={this.handleChange} type='date' id='check_out'/><br/>
              </div>
      
                <h2 className='room-text'>Room Details</h2>
                
              <div className='col s12'>
                  <label>How many rooms?</label>
                  <select onChange={this.handleChange} className='browser-default' id='room_qty'>
                    <option value='1'>1</option>
                    <option value='2'>2</option>
                    <option value='3'>3</option>
                    <option value='4'>4</option>
                  </select>
              </div>
      
              <div className='col s6'>
                  <label>How many adults?</label>
                  <select onChange={this.handleChange} className='browser-default' id='guests_adult'>
                    <option value='1'>1 Adult</option>
                    <option value='2'>2 Adults</option>
                    <option value='3'>3 Adults</option>
                    <option value='4'>4 Adults</option>
                  </select>
              </div>
      
              <div className='col s6'>
                  <label>How many children?</label>
                  <select onChange={this.handleChange} className='browser-default' id='guests_child'>
                    <option value='0'>0 Children</option>
                    <option value='1'>1 Children</option>
                    <option value='2'>2 Children</option>
                  </select>
              </div>
      
              <div className='col s12'></div>
                
                <h2 className='roomtypes-text'>Room Types</h2>
                
              <div className='col s6'>
                  <p>
                    <label>
                     <input onChange={this.handleChange} className='with-gap' name='group1'  type='radio' value="Habitación Individual Economica" checked />
                      <span id='texto'>Habitación Individual Economica</span>
                    </label>
                  </p>
      
                  <p>
                    <label>
                     <input onChange={this.handleChange} className='with-gap' name='group1'  type='radio' value="Habitación Matrimonial Economica" id='room_type' />
                      <span id='texto'>Habitación Matrimonial Economica</span>
                    </label>
                  </p>
      
                  <p>
                    <label>
                     <input onChange={this.handleChange} className='with-gap' name='group1'  type='radio' value="Habitación 2Camas Economica" id='room_type' />
                      <span id='texto'>Habitación 2Camas Economica</span>
                    </label>
                  </p>
      
                </div>
               
                <div className='col s6'>
                  <p>
                    <label>
                     <input onChange={this.handleChange} className='with-gap' name='group1'  type='radio' value="Habitación Individual Superior" id='room_type' />
                      <span id='texto'>Habitación Individual Superior</span>
                    </label>
                  </p>
      
                  <p>
                    <label>
                     <input onChange={this.handleChange} className='with-gap' name='group1'  type='radio' value="Habitación Matrimonial Superior" id='room_type' />
                      <span id='texto'>Habitación Matrimonial Superior</span>
                    </label>
                  </p>
      
                  <p>
                    <label>
                     <input onChange={this.handleChange} className='with-gap' name='group1'  type='radio' value="Habitación 2Camas Superior" id='room_type' />
                      <span id='texto'>Habitación 2Camas Superior</span>
                    </label>
                  </p>
      
                </div>
                <div className='btn-div col s12'>
                 <input id='add-event' className='btn btn-info' type='submit' value='Reserva' onClick={this.handleReservaciones}/>
                </div>
              </form>
            
          
            <div className="col s6">
      
              {/* cards de contactos */}
             
              <div className="col s12 topCard">
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
                </div>
                <div className= "col s12" id="info-text">
                <h4 className="card-title"><i className="fas fa-hotel"></i> Fátima Inn Hotel cuenta con: </h4>
                <li><i className="fas fa-bed"></i> 6 Habitaciones Individuales (Camas de 2 Plazas c/u) </li>
                <li><i className="fas fa-bed"></i> 7 Habitaciones Matrimoniales (Camas de 2 Plazas c/u) </li>
                <li><i className="fas fa-bed"></i> <i className="fas fa-bed"></i> 2 Habitaciones Dobles ( De 2 Camas de 2 plazas c/u)</li>
                <li><i className="fas fa-bed"></i> <i className="fas fa-bed"></i> 2 Habitaciones Dobles (1 Cama de 2 Plazas y 1 Cama de 1 ½ Plaza)</li>
                <li><i className="fas fa-bed"></i> <i className="fas fa-bed"></i> <i className="fas fa-bed"></i> 1 Habitación Triple (2 Camas de 2 Plazas c/u y 1 Cama de 1½ Plaza) </li>
            </div>
          </div>
          );
  }
}