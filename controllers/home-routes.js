const router = require('express').Router();
const sequelize = require('../config/connection');


const {Appointments } = require('../models');

router.get("/", (req, res) => {
  res.redirect("/index");
});

router.get("/login", (req, res) => {
  res.render("login");
});

router.get("/register", (req, res) => {
  res.render("register");
});

router.get("/index", (req, res) => {
  if(!req.session.loggedIn){
    res.render("login.ejs")
  }
  else  res.render("index.ejs", {name: req.session.name});
});


router.get('/upload', (req, res) => {
  if(!req.session.loggedIn){
    res.render("login.ejs")
  }
  else res.render('upload');
});

router.get('/appointment', (req, res) => {
  if(!req.session.loggedIn){
    res.render("login.ejs")
  }
  else res.render('appointment');
});

module.exports = router;