// require("dotenv").config();
var session = require('express-session')
const express = require ('express');
// const nodemailer = require('nodemailer');
const sendMail = require ('./mail');
// const passport = require('passport');
const path = require('path');
const app = express();

// const auth = require('./config/passport')(passport);

// Satitic folder
app.use(express.static(path.join(__dirname, 'public')));

//data parsing
app.use(express.urlencoded({extended: false}));
app.use(express.json());
// app.use(passport.initialize())
// app.use(passport.session())

var syncOptions = { force: false };

// If running a test, set syncOptions.force to true
// clearing the `testdb`
if (process.env.NODE_ENV === "test") {
  syncOptions.force = true;
}
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
        alert("Email has been sent!!!");
    }
});
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
    res.sendFile(path.join(__dirname, 'views', 'paqueteturistico.html'));
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

// SESSION SETUP
var sess = {
    secret: "fatima inn",
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }
  };
  
  // SESSION SETUP
  if (app.get("env") === "production") {
    app.set("trust proxy", 1); // trust first proxy
    sess.cookie.secure = true; // serve secure cookies
  };
  
  app.use(session(sess));
  

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

