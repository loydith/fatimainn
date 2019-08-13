const passport = require('passport');
const db = require('../models');
const LocalStrategy = require('passport-local').Strategy
passport.use(new LocalStrategy(
    function(username, password, done) {
        db.User.findOne({  // Using sequelize model function
            where: { // Take an object with options where self explanatory
                'username': username
            }
        }).then(function (user) { // Sequelize return a promise with user in callback
            if (user == null) { // Checking if user exsists
                return done(null, false)  // Standerd Passport callback
            }

            if (password == user.password) { // use your password hash comparing logic here for security
                return done(null, user) // Standerd Passport callback
            }
            return done(null, false) // Standerd Passport callback
        })
    }
))

// for maintaining session
 passport.serializeUser(function(user, done) { // Standered Serialize for session
    done(null, user.id)
})

passport.deserializeUser(function(id, done) {
    db.User.findOne({ // Using sequelize model functoin
        where: {
            'id': id
        }
    }).then(function (user) {
        if (user == null) {
            done(new Error('Wrong user id.'))
        }

        done(null, user) // Standerd deserailize callback
    })
});
module.exports = passport;