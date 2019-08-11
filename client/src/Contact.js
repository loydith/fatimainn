import React from 'react';
function Contact() {
    return (
    <div class="container">
    <div class="row formMargin">
    <form class="col s6" id="contactanos">
        <h1 class="center align card-title" id="contact-us">Contact Us</h1>
        <div class="row">
            <div class="input-field col s6">
                <i class="material-icons prefix"></i>
                <input placeholder="Full Name" id="full_name" type="text" name="name" class="validate" />
                <label for="full_name"><i class="material-icons">person</i></label>
            </div>
        </div>
        <div class="input-field col s6">
          <i class="material-icons prefix"></i>
          <input placeholder="Email" id="email" type="email" name="email"class="validate"/>
          <label for="email"><i class="material-icons">email</i></label>
        </div>
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
        <div class="row">
          <div class="input-field col s12">
            <i class="material-icons prefix"></i>
            <textarea placeholder="Message" id="textarea2" name ="message" class="materialize-textarea" data-length="120" style={{height: `${200}PX`}}></textarea>
            <label for="textarea2"><i class="material-icons">message</i></label>
          </div>
        </div>
        <div class="buttonHolder">
        <button class="btn waves-effect waves-light" type="submit" name="emailaddress" id="submit">
            <span id="txt1">Enviar</span>4
            <i class="material-icons left">email</i>
            </button>
        </div>
    </form>
    </div>
    </div>);
}

export default Contact;