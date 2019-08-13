require('dotenv').config();
const nodemailer = require('nodemailer');
const mailGun = require('nodemailer-mailgun-transport');


//structure of the email

const sendMail = (email, subject, text, cb) => {
    const auth ={
        // server: 'gmail',
        auth: {
            api_key: '5ace22a142a886449aec2ce0074d5fb5-73ae490d-e2492fb7',
            domain: 'https://api.mailgun.net/v3/sandbox070fc28bd635484db357901d06e0ad51.mailgun.org',
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

