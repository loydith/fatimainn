const nodemailer = require('nodemailer');
const mailGun = require('nodemailer-mailgun-transport');
const transporter = nodemailer.createTransport(mailGun(auth));

const auth ={
    host: "smtp.mailtrap.io",
    port: 2525,
    secure: false, // true for 465, false for other ports
    auth: {
        user: "c42ae5fcaabd18", // generated ethereal user
        pass: "e84c3306df44ce" // generated ethereal password
    }
};
const mailOptions = {
    from: '"Nodemailer contact <6bfd725532-a6a53a@inbox.mailtrap.io>', // sender address
    to: "loydith@gmail.com", // list of receivers
    cc: "ventas@fatimacamilainn.com",
    subject: "Node contact request", // Subject line
    text: "Hello world?", // plain text body
    html: output // html body
    };

transporter.sendMail(mailOptions, function(err, data){
    if(err){
        console.log('Error Occurs');

    }else{
        console.log('Message sent!!');
    }
})