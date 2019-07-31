const nodemailer = require('nodemailer');
const mailGun = require('nodemailer-mailgun-transport');
const transporter = nodemailer.createTransport(mailGun(auth));

const auth ={
    auth: {
        api_Key: '39dbca1c047539a821d8993a40bcfb26-f877bd7a-82eb4234',
        domain: 'sandbox694320186e654897af66ab7bdba8246f.mailgun.org'
    }
};
const mailOptions = {
    from: ' brad@sandbox694320186e654897af66ab7bdba8246f.mailgun.org', // sender address
    to: "loydith@gmail.com", // list of receivers
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