
// chunck => 1
const express = require ('express');
// const nodemailer = require('nodemailer');
// const bodyParser = require("body-parser");
const path = require('path');

const log = console.log;
const app = express();
const PORT = process.env.PORT || 3000;

// Satitic folder
app.use('/public', express.static(path.join(__dirname, 'public')));
// app.use(express.static(path.join(__dirname + "/view")));
// app.get(express.static("view"));

//chunk => 2
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


app.listen(PORT, () => log('Server is starting on PORT, ', 3000));
