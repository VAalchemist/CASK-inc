if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

const session = require("express-session");
// const methodOverride = require('method-override')
const multer = require('multer');



const passport = require("passport");
const express = require("express");
const sequelize = require("./config/connection");
const app = express();
const path = require('path');
const port = process.env.PORT || 3000;
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'Images')
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname))
  }
})
const upload = multer({storage: storage})

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


app.use(session(sess));
// app.use(methodOverride('_method'))
app.get('/upload', (req, res) => {
  res.render('upload');
});
app.post('/upload', upload.single('image'), (req, res) => {
  res.send('Image uploaded');
});


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