require('dotenv').config();
const nodemailer = require('nodemailer');
const mailGun = require('nodemailer-mailgun-transport');


//structure of the email

const sendMail = (email, subject, text, cb) => {
    const auth ={
        // server: 'gmail',
        auth: {
            api_key: '',
            domain: '',
            // api_key: process.env.EMAIL,
            // domain: process.env.PASSWORD
            
        }
    };
    const transporter = nodemailer.createTransport(mailGun(auth));
    const mailOptions = {
        from: email, // sender address
        from: 'fatimasmu2019@gmail.com',
        to: 'fatimasmu2019@gmail.com', // list of receiver
        subject: 'Testing', // Subject line
        text // plain text body
        
        };
    
    transporter.sendMail(mailOptions, function(err, data){
        if(err){
            cb(err, null);

        }else{
            // alert("Email has been sent!!!");
            console.log(data)
            cb(null, data);
        }
    })
}
module.exports = sendMail;

