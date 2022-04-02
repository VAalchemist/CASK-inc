const router = require('express').Router();

// const { User, Client } = require('../models');

router.get("/login", (req, res) => {
  res.render("login.ejs");
});

router.get("/register", (req, res) => {
  res.render("register.ejs");
});

router.get("/", (req, res) => {
  res.render("index.ejs");
});



module.exports = router;