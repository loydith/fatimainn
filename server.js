// require("dotenv").config();
const express = require ('express');
const nodemailer = require('nodemailer');
const path = require('path');
const app = express();

// Satitic folder
app.use('/public', express.static(path.join(__dirname, 'public')));

// Use morgan logger for logging requests
// app.use(logger("dev"));

//data parsing
app.use(express.urlencoded({extended: false}));
app.use(express.json());

app.post('/email', (req, res) => {
//send email here
console.log('Data: ', req.body);
res.json({ message: 'Message received!!!'})
});

// pages
app.get('/', (req, res) =>{
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

// listen on port 3000
var PORT = process.env.PORT || 3000;
db.sequelize.sync().then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});
// app.listen(PORT, () => log('Server is starting on PORT, ', 3000));
