require('dotenv').config();
const nodemailer = require('nodemailer');
const mailGun = require('nodemailer-mailgun-transport');


//structure of the email

const sendMail = (email, subject, text, cb) => {
    const auth ={
        // server: 'gmail',
        auth: {
            api_key: '772cf054191f6594271c89e5f14bb947-f877bd7a-c255bae3',
            domain: 'https://api.mailgun.net/v3/sandbox3e75a5192d664c0fbd44591bb919bc54.mailgun.org',
            // api_key: process.env.EMAIL,
            // domain: process.env.PASSWORD
            
        }
    };
    const transporter = nodemailer.createTransport(mailGun(auth));
    const mailOptions = {
        from: email, // sender address
        from: 'ventas@fatimacamilainn.com',
        to: 'ventas@fatimacamilainn.com', // list of receiver
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

