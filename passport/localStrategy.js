const LocalStrategy = require('passport-local').Strategy
const db = require('../models');
const strategy = new LocalStrategy((username, password, done) => {
    console.log('local', username, password);
    done(null, {username, password});
})
module.exports = strategy;