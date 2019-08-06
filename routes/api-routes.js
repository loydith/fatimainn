var db = require("../models");

module.exports = function(app) {
  

  // show login page
  app.get("/login", function(req, res) {
    res.render("login");
  });

  // show sign up page
  app.get("/signup", function(req, res) {
    res.render("signup");
  });

  // after user logs in, show their reservaciones
  app.get("/reservaciones", function(req, res) {
    console.log(req.session.loggedin);
    console.log(req.session.userId);

    // find user's brackets
    db.user.findAll({
      where: {
        userId: req.session.userId
      }
    }).then(function (dbResponse) {
      res.render("reservaciones", {
        // pass in loggedin state, userid, username and reservaciones
        loggedin: req.session.loggedin,
        userId: req.session.userId,
        username: req.session.username,
        reservaciones: dbResponse
      });
    });
  });

  // display a reservation page
  app.get("/reservaciones/:id", function(req, res) {
    db.reservation.findOne({
      where: {
        id: req.params.id
      }
    }).then(function(dbResponse) {
      console.log(dbResponse);
      if (req.session.loggedin) {
        res.render("reservaciones", {
          // pass in loggedin state, userid, username, and reservation
          loggedin: req.session.loggedin,
          userId: req.session.userId,
          username: req.session.username,
          // reservation: dbResponse,
          id: dbResponse.dataValues.id,
          
        });
      } else {
        res.render("reservaciones", {
          // pass in loggedin state, userid, username, and reservation
          // brackets: dbResponse,
          id: dbResponse.dataValues.id,
          
        });
      }
    });
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    if (req.session.loggedin) {
      res.render("404", {
        // pass in loggedin state, userid, username, and brackets
        loggedin: req.session.loggedin,
        userId: req.session.userId,
        username: req.session.username
      });
    } else {
      // if not logged in, prompt them to login (or sign up)
      res.render("404");
    }
  });
};