const router = require('express').Router();


const { User, Client } = require('../models');

router.get("/", (req, res) => {
  res.redirect("/index");
});

router.get("/login", (req, res) => {
  res.render("login.ejs");
});

router.get("/register", (req, res) => {
  res.render("register.ejs");
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

module.exports = router;