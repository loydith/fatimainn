// require("dotenv").config();
var session = require('express-session')
const express = require('express');
const sendMail = require('./mail');
const cookieParser = require('cookie-parser'); //hide the ids
const SessionStore = require('express-session-sequelize')(session.Store);//create the store
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;
const db = require("./models");
const passport = require('./passport/index.js');
// Satitic folder
app.use(express.static(path.join(__dirname, 'public')));


var syncOptions = { force: false };
// const auth = require('./config/passport')(passport);

//data parsing
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cookieParser());
app.use(session({
    secret: 'asjdlaksjdajdlkajdljalksjd',
    resave: true,
    saveUninitialized: true,
    cookie: { maxAge: 100 * 60 * 60 * 24 * 30 } // = 30 days
}));

//possport => make sure the user and pass saved 
app.use(passport.initialize());
app.use(passport.session());
// If running a test, set syncOptions.force to true
// clearing the `testdb`
if (process.env.NODE_ENV === "test") {
    syncOptions.force = true;
}

// if (process.env.JAWSDB_URL) {
//     connection = mysql.createConnection(process.env.JAWSDB_URL);
// }else {
//     connection = mysql.createConnection({
//         host: 'localhost',
//         user: 'root',
//         password: 'q9fbqj3cbjc82d2f',
//         database: 'fatimainn_db'
//     });
// };
// email, subject, text
app.post('/email', (req, res) => {
    //send email here
   
    const {email, subject, text} = req.body;
    console.log('Data: ', req.body);
    sendMail(email, subject, text, function (err, data) {
        if (err) {
            res.status(500).json({ message: 'Internal Error' });
        } else {
            res.json({ message: 'Email sent!!!' });
            alert("Email has been sent!!!");
        }
    });
});


// SESSION SETUP
if (app.get("env") === "production") {
    app.set("trust proxy", 1); // trust first proxy
    sess.cookie.secure = true; // serve secure cookies
};

// Routes
// require("./routes/api-routes")(app);
const htmlRoutes = require("./routes/html-routes");
const apiRoutes = require("./routes/api-routes");
const auth = require('./routes/auth');
app.use('/', htmlRoutes);
app.use('/reservations', apiRoutes);
app.use('/api/', auth);
db.sequelize.sync().then(function () {
    db.User.create({
        username: 'admin',
        password: 'admin',
        adminUser: true
    })
    app.listen(PORT, function () {
        console.log("App listening on PORT " + PORT);
    });
});