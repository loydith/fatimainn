import React from 'react';
function CardContact() {
  return (
<div>
<div className="col s5" id="links">
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
            +1 804-4775524 English
           
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
  );
}
export default CardContact;