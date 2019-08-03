const passport = require('passport');
const db = require('../models');
const LocalStrategy = require('./localStrategy');
//got the inf for the login page
passport.deserializeUser((user, done) => {
    db.User.findOne({
        where: {
            username:user.username,
            password:user.password
        }
    }).then((dbUser) => {
        const user = dbUser.dataValues;

        console.log(dbUser.dataValues)
        done(null, dbUser.dataValues)
    })
});
//confirm if the user the db
passport.serializeUser((user, done) => {
    console.log('SERIAL', user)
    done(null, user);
});
passport.use(LocalStrategy);
module.exports = passport;