const nodemailer = require('nodemailer');
const mailGun = require('nodemailer-mailgun-transport');


//structure of the email

const sendMail = (email, subject, text, cb) => {
    const auth ={
        auth: {
            
            api_key: '',
            domain: ''
            
        }
    };
    const transporter = nodemailer.createTransport(mailGun(auth));
    const mailOptions = {
        from: email, // sender address
        to: "", // list of receiver
        subject, // Subject line
        text // plain text body
        
        };
    
    transporter.sendMail(mailOptions, function(err, data){
        if(err){
            cb(err, null);

        }else{
            console.log(data)
            cb(null, data);
        }
    })
}
module.exports = sendMail;

