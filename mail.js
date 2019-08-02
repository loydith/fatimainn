const nodemailer = require('nodemailer');
const mailGun = require('nodemailer-mailgun-transport');


//structure of the email

const sendMail = (email, subject, text, cb) => {
    const auth ={
        auth: {
            
            api_key: 'key-485889062f8e8d967edd2942216914ea',
            domain: 'https://api.mailgun.net/v3/sandbox694320186e654897af66ab7bdba8246f.mailgun.org'
        }
    };
    const transporter = nodemailer.createTransport(mailGun(auth));
    const mailOptions = {
        from: email, // sender address
        to: "loydith@gmail.com", // list of receiver
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

