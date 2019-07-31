
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
    res.sendFile(path.join(__dirname, 'views'));
});
app.get('/', (req, res) =>{
    res.sendFile(path.join(__dirname, 'views', 'contactos.html'));
});
app.get('/', (req, res) =>{
    res.sendFile(path.join(__dirname, 'views', 'diacompleto.html'));
});
app.get('/', (req, res) =>{
    res.sendFile(path.join(__dirname, 'views', 'habitaciones.html'));
});


app.listen(PORT, () => log('Server is starting on PORT, ', 3000));
