var db = require("../models");

module.exports = function(app) {
  // index route loads view.html
  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/reservations.html"));
  });

  // auto login for dev purposes
  app.get("/auto-login", function (req, res) {
    req.session.loggedin = true;
    req.session.userId = 1;
    req.session.username = "loy";
    res.send();
  });

  // create user from sign up form
  app.post("/api/users", function (req, res) {
    var user = req.body.username;
    var pass = req.body.password;
    db.User.create({
      username: user,
      password: pass
    }).then(function (dbResponse) {
      console.log(dbResponse.id);
      console.log(dbResponse.username);
      // user is now logged in, so save their data and loggedin state
      req.session.loggedin = true;
      req.session.userId = dbResponse.id;
      req.session.username = dbResponse.username;
      // redirect to user's dashboard
      res.redirect("/dashboard");
    });
  });

  // check user's login attempt from login form
  // app.post("/login", function (req, res) {
  //   var user = req.body.username;
  //   var pass = req.body.pass;
  //   db.User.findAll({
  //     where: {
  //       username: user,
  //       password: pass
  //     }
  //   }).then(function (dbResponse) {
      // console.log(dbResponse);
      // console.log(dbResponse[0].id);
      // if (dbResponse.length === 0) {
      //   console.log("no user with those credentials");
      //   res.json(false);
      // } else {
        // console.log("user found");
        // // set the session loggedin state and userId
        // req.session.loggedin = true;
        // req.session.userId = dbResponse[0].id;
        // req.session.username = dbResponse[0].username;
        // console.log(req.session.loggedin);
        // console.log(req.session.userId);
        // res.redirect("/dashboard");
        // res.json(true);
  //     }
  //   });
  // });

  // logout
  app.get("/logout", function(req, res) {
    // req.session.destroy();
    req.session.destroy(function(err) {
      res.redirect("/");
    });
  });

  // create new reservation
  app.post("/api/reservation", function(req, res) {
    var userId = req.session.userId;
    var first_name = req.body.name;

    var teamNames = JSON.parse(req.body);

    db.Reservation.create({
      first_name: firstName,
      lastNames: lastNames,
      UserId: userId
    }).then(function(dbResponse) {
      // display that reservation page
      res.json(dbResponse.dataValues.id);
    });
  });
};
// id int NOT NULL AUTO_INCREMENT,
//    first_name varchar(100) NOT NULL,
//    last_name varchar(200) NOT NULL,
//    email varchar(50) NOT NULL,
//    phone varchar(12) NOT Null,
//    room_type varchar(100) NOT Null,
//    room_qty integer(17) NOT Null,
//    cr_qty integer(2) NOT Null,
//    message varchar(500) NOT NULL,
//    PRIMARY KEY (id)