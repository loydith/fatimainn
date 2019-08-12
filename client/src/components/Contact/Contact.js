import React, { Component } from 'react';
function Contact() {
    return (
    <div class="container">
    <div class="row formMargin">
    <form class="col s6" id="contactanos">
        <h1 class="center align" id="contact-us">Contact Us</h1>
        <div class="row">
            <div class="input-field col s6">
                <i class="material-icons prefix"></i>
                <input placeholder="Full Name" id="full_name" type="text" name="name" class="validate" />
                <label for="full_name"><i class="material-icons">person</i></label>
            </div>
        
        <div class="input-field col s6">
          <i class="material-icons prefix"></i>
          <input placeholder="Email" id="email" type="email" name="email"class="validate"/>
          <label for="email"><i class="material-icons">email</i></label>
        </div>
        </div>
        <div class = "row">
        <div class="input-field col s6">
          <i class="material-icons prefix"></i>
          <input placeholder="Subject" id="subject" type="text"class="validate"/>
          <label for="subject"><i class="material-icons">subject</i></label>
        </div>
        <div class="input-field col s6">
          <i class="material-icons prefix"></i>
          <input placeholder="+(51) 555 555 555" id="phone" type="tel" class="validate"/>
          <label for="phone"><i class="material-icons">phone</i></label>
        </div>
        </div>
        <div class="row">
          <div class="input-field col s12">
            <i class="material-icons prefix"></i>
            <textarea placeholder="Message" id="textarea2" name ="message" class="materialize-textarea" data-length="120" style={{height: `${200}PX`}}></textarea>
            <label for="textarea2"><i class="material-icons">message</i></label>
          </div>
        </div>
        <div class="buttonHolder">
        <button class="btn waves-effect waves-light" type="submit" name="emailaddress" id="submit">
            <span id="txt1">Enviar</span>
            <i class="material-icons left">email</i>
            </button>
        </div>
    </form>
    
    <div className="col s5 topCard" id="links">
        <div className="card blue-light darken-1" id="card">
            <h1 className="card-title"><i className="fas fa-hotel"></i> Dirección</h1>
            Jr. San Martín N° 127, Tarapoto, San Martin - Peru<br/>
                Plaza de Armas <br/>
                <br/>
                <br/> 
        </div>
  </div>     

 
  <div className="col s5" id="links">
        <div className="card blue-light darken-1" id="card">
          <h1 className="card-title"><img src="/RedesSociales/phone.png" width="27px" alt="27px"/>Contáctos</h1>
          
            +(51) 042 566 359 <br/>
            +(51) 942 889 047 <br/>
            +(51) 986 585 921 <br/>
            +1 804-4775524 English <br/>
           
        </div>
    </div>
  
  <div className="col s5" id="links">
    <div className="card blue-light darken-1" id="card">
      <h1 className="card-title">Redes Sociales</h1>
      <p>
        <a href="mailto:loydith@gmail.com">ventas@fatimacamilainn.com</a><br/><br/>
        <a href="mailto:loydith@gmail.com"><img src="/RedesSociales/email.png" width="30px" alt="30px"/></a>
        <a href="https://www.facebook.com/fatimainnhotel"><img src="/RedesSociales/facebook.png" width="30px" alt="30px"/></a>
        <a href="https://www.linkedin.com/company/fatimainn/?viewAsMember=true"><img src="/RedesSociales/in.png" width="30px" alt="30px"/></a>
        <a href="https://twitter.com/fatimainnhotel"><img src="/RedesSociales/twitter.png" width="30px" alt="30px"/></a>
        <a href="https://www.instagram.com/hotelfatimainn/"><img src="/RedesSociales/instagram.png" width="30px" alt="30px"/></a>
      </p> 
    </div>
  </div>
  </div>
    </div>);
}

export default Contact;