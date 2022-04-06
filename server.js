if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

const session = require("express-session");
// const methodOverride = require('method-override')
const multer = require('multer');

const cloudinary = require('cloudinary')
const passport = require("passport");
const express = require("express");
const sequelize = require("./config/connection");
const app = express();
const path = require('path');
const port = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use('/public/',express.static('public'));
app.set('view engine', "ejs")

const sess = {
  secret: process.env.SESSION_SECRET,
  cookie: {},
  resave: true,
  saveUninitialized: false
};

cloudinary.config({ 
  cloud_name: process.env.cloudinary_name, 
  api_key: process.env.cloudinary_api, 
  api_secret: process.env.cloudinary_secret 
});

app.use(session(sess));


//used to get the controllers
app.use(require('./controllers'));


//sync and force to drop tables on creation
sequelize.sync({
  force: false
})
.then(() => {
  app.listen(port, () => {
    console.log("Listening on http://localhost:" + port);
  });
});