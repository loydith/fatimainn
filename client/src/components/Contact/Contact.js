import React from 'react';
export default class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      subject: '',
      email: '',
      telephone: '',
      message: ''
    }
  }
  handleContactFormSubmission = (event) => {
    event.preventDefault();
    const data = {
      name: this.state.name,
      subject: this.state.subject,
      email: this.state.email,
      phone: this.state.telephone,
      textarea: this.state.message
    };
    this.props.handleEmail(data);
  }
  handleChange = (event) => {
    const { name, value } = event.target || event.srcElement;
    this.setState({
      [name]: value
    });
  }
  render() {
    return (
      <div className="container">
        <div className="row formMargin">
          <form className="col s6" id="contactanos">
            <h1 className="center align" id="contact-us">Contact Us</h1>
            <div className="row">
              <div className="input-field col s6">
                <i className="material-icons prefix"></i>
                <input onChange={this.handleChange} placeholder="Full Name" id="full_name" type="text" name="name" className="validate" />
                <label htmlFor="full_name"><i className="material-icons">person</i></label>
              </div>
              <div className="input-field col s6">
                <i className="material-icons prefix"></i>
                <input onChange={this.handleChange} placeholder="Email" id="email" type="email" name="email" className="validate" />
                <label htmlFor="email"><i className="material-icons">email</i></label>
              </div>
            </div>
            <div className="row">
              <div className="input-field col s6">
                <i className="material-icons prefix"></i>
                <input onChange={this.handleChange} placeholder="Subject" id="subject" type="text" name="subject" className="validate" />
                <label htmlFor="subject"><i className="material-icons">subject</i></label>
              </div>
              <div className="input-field col s6">
                <i className="material-icons prefix"></i>
                <input onChange={this.handleChange} placeholder="+(51) 555 555 555" id="phone" type="tel" name="telephone" className="validate" />
                <label htmlFor="phone"><i className="material-icons">phone</i></label>
              </div>
            </div>
            <div className="row">
              <div className="input-field col s12">
                <i className="material-icons prefix"></i>
                <textarea onChange={this.handleChange} placeholder="Message" id="textarea2" name="message" className="materialize-textarea" data-length="120" style={{ height: `${200}PX` }}></textarea>
                <label htmlFor="textarea2"><i className="material-icons">message</i></label>
              </div>
            </div>
            <div className="buttonHolder">
              <button className="btn waves-effect waves-light" type="submit" name="emailaddress" id="submit" onClick={this.handleContactFormSubmission}>
                <span id="txt1">Enviar</span>
                <i className="material-icons left">email</i>
              </button>
            </div>
          </form>
  
          <div className="col s5 topCard" id="links">
            <div className="card blue-light darken-1" id="card">
              <h1 className="card-title"><i className="fas fa-hotel"></i> Dirección</h1>
              Jr. San Martín N° 127, Tarapoto, San Martin - Peru<br />
              Plaza de Armas <br />
              <br />
              <br />
            </div>
          </div>
  
  
          <div className="col s5" id="links">
            <div className="card blue-light darken-1" id="card">
              <h1 className="card-title"><img src="/RedesSociales/phone.png" width="27px" alt="27px" />Contáctos</h1>
  
              +(51) 042 566 359 <br />
              +(51) 942 889 047 <br />
              +(51) 986 585 921 <br />
              +1 804-4775524 English <br />
  
            </div>
          </div>
  
          <div className="col s5" id="links">
            <div className="card blue-light darken-1" id="card">
              <h1 className="card-title">Redes Sociales</h1>
              <p>
                <a href="mailto:loydith@gmail.com">ventas@fatimacamilainn.com</a><br /><br />
                <a href="mailto:loydith@gmail.com"><img src="/RedesSociales/email.png" width="30px" alt="30px" /></a>
                <a href="https://www.facebook.com/fatimainnhotel"><img src="/RedesSociales/facebook.png" width="30px" alt="30px" /></a>
                <a href="https://www.linkedin.com/company/fatimainn/?viewAsMember=true"><img src="/RedesSociales/in.png" width="30px" alt="30px" /></a>
                <a href="https://twitter.com/fatimainnhotel"><img src="/RedesSociales/twitter.png" width="30px" alt="30px" /></a>
                <a href="https://www.instagram.com/hotelfatimainn/"><img src="/RedesSociales/instagram.png" width="30px" alt="30px" /></a>
              </p>
            </div>
          </div>
        </div>
      </div>);
  }
};