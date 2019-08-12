// Requiring our models
var express = require("express");
const router = express.Router();
var db = require("../models");
  // GET route for getting all of the reservations
  router.get("/", function(req, res) {
    db.Reservation.findAll({
    }).then(function(dbReservation) {
      res.json(dbReservation);
    });
  });
  // Get route for retrieving a single booking
  router.get("/:id", function(req, res) {
    
    db.Reservation.findOne({
      where: {
        id: req.params.id
      },
      include: [db.Reservation]
    }).then(function(dbReservation) {
      res.json(dbReservation);
    });
  });
  // POST route for saving a new booking
  router.post("/", function(req, res) {
    console.log(req.body);
    db.Reservation.create(req.body).then(function(dbReservation) {
      res.json(dbReservation);
    });
  });
  // DELETE route for deleting booking
  router.delete("/:id", function(req, res) {
    db.Reservation.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(dbReservation) {
      res.json(dbReservation);
    });
  });
  // PUT route for updating booking
  router.put("/", function(req, res) {
    db.Reservation.update(
      req.body,
      {
        where: {
          id: req.body.id
        }
      }).then(function(dbReservation) {
      res.json(dbReservation);
    });
  });
module.exports = router;