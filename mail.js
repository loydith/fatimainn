const nodemailer = require('nodemailer');
const mailGun = require('nodemailer-mailgun-transport');
const transporter = nodemailer.createTransport(mailGun(auth));

const auth ={
    auth: {
        api_Key: '',
        domain: ''
    }
};
const mailOptions = {
    from: '', // sender address
    to: "", // list of receivers
    cc: "",
    subject: "Contact Form", // Subject line
    text: "Need more information about the reservation"// plain text body
    
    };

transporter.sendMail(mailOptions, function(err, data){
    if(err){
        console.log('Error Occurs');

    }else{
        console.log('Message sent!!');
    }
})