// require("dotenv").config();
var session = require('express-session')
const express = require ('express');
const sendMail = require ('./mail');
const cookieParser = require('cookie-parser'); //hide the ids
const SessionStore = require('express-session-sequelize')(session.Store);//create the store
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;
const db = require("./models");
const Sequelize = require('sequelize');
const config = require('./config/config.json');
const passport = require('./passport/index.js');
const dev = config['development'];
var sequelize = new Sequelize(dev.database, dev.username, dev.password, {
    host:'localhost',
    dialect:'mysql'
});
const store = new SessionStore({
    db: sequelize
})

// Satitic folder
app.use(express.static(path.join(__dirname, 'public')));


var syncOptions = { force: false };
// const auth = require('./config/passport')(passport);

//data parsing
app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(cookieParser());
app.use(session({
    secret: "fatima inn",
    store,
    resave: false,
    saveUninitialized: false,
    cookie: { secure: false }
}));

//possport => make sure the user and pass saved 
app.use(passport.initialize());
app.use(passport.session());
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


  
  // SESSION SETUP
  if (app.get("env") === "production") {
    app.set("trust proxy", 1); // trust first proxy
    sess.cookie.secure = true; // serve secure cookies
  };

// Routes
// require("./routes/api-routes")(app);
// require("./routes/html-routes")(app);
const auth = require('./routes/auth');
app.use('/api/', auth);
  db.sequelize.sync().then(function() {
    app.listen(PORT, function() {
      console.log("App listening on PORT " + PORT);
    });
  });
  



