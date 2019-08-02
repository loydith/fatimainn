// require("dotenv").config();
const express = require ('express');
const nodemailer = require('nodemailer');
const sendMail = require ('./mail');
const session = require("express-session");
const path = require('path');
const app = express();

// Satitic folder
app.use('/public', express.static(path.join(__dirname, 'public')));

//data parsing
app.use(express.urlencoded({extended: false}));
app.use(express.json());

// email, subject, text
app.post('/email', (req, res) => {
//send email here

const {email, subject, text} = req.body;
console.log('Data: ', req.body);
sendMail(email, subject, text, function(err, data){
    if(err){
        res.status(500).json({ message: 'Internal Error'});
    }else {
        res.json({message: 'Email sent!!!'});
    }
});
});
// login
app.post('/login', (req, res)=>{
console.log(req.body);
    res.status(200).json({message: 'Logged In'})
});



// pages
app.get('/', (req, res) =>{
    res.sendFile(path.join(__dirname, 'views', 'index.html'));
});
app.get('/index', (req, res) =>{
    res.sendFile(path.join(__dirname, 'views', 'index.html'));
});
app.get('/auditorio', (req, res) =>{
    res.sendFile(path.join(__dirname, 'views', 'auditorio.html'));
});
app.get('/contactos', (req, res) =>{
    res.sendFile(path.join(__dirname, 'views', 'contactos.html'));
});
app.get('/diacompleto', (req, res) =>{
    res.sendFile(path.join(__dirname, 'views', 'diacompleto.html'));
});
app.get('/habitaciones', (req, res) =>{
    res.sendFile(path.join(__dirname, 'views', 'habitaciones.html'));
});
app.get('/mediodia', (req, res) =>{
    res.sendFile(path.join(__dirname, 'views', 'mediodia.html'));
});

app.get('/paqueteturistico', (req, res) =>{
    res.sendFile(path.join(__dirname, 'views', 'paquteturistico.html'));
});

app.get('/reservaciones', (req, res) =>{
    res.sendFile(path.join(__dirname, 'views', 'reservaciones.html'));
});
app.get('/login', (req, res) =>{
    res.sendFile(path.join(__dirname, 'views', 'login.html'));
});
app.get('/signup', (req, res) =>{
    res.sendFile(path.join(__dirname, 'views', 'signup.html'));
});

// bring in the models
var db = require("./models");

// Routes
require("./routes/api-routes")(app);
require("./routes/html-routes")(app);

// listen on port 3000
var PORT = process.env.PORT || 3000;
db.sequelize.sync().then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});

