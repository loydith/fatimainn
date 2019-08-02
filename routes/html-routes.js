var db = require("../models");

module.exports = function(app) {
  // Load index page


  // show login page
  app.get("/login", function(req, res) {
    res.render("login");
  });

  // show sign up page
  app.get("/signup", function(req, res) {
    res.render("signup");
  });

  // // after user logs in, show their dashboard
  // app.get("/dashboard", function(req, res) {
  //   // console.log(req.session.loggedin);
  //   // console.log(req.session.userId);

  //   // find user's reservation
    
      
  //   }).then(function (dbResponse) {
  //     res.render("dashboard", {
  //       // pass in loggedin state, userid, username, and reservations
        
      
  //   });

  
  // create a bracket
  app.get("/create", function(req, res) {
    
  });

  // Render 404 page for any unmatched routes
  // app.get("*", function(req, res) {
  //   if (req.session.loggedin) {
  //     res.render("404", {
        
  //     });
  //   } else {
  //     // if not logged in, prompt them to login (or sign up)
  //     res.render("404");
  //   }
  // });
};