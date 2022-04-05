if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

const express = require("express");
const sequelize = require("./config/connection");
const app = express();
const port = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: false }));
app.use('/public',express.static('public'));
app.use(express.json());
app.use(flash());
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
  })
);
app.use(passport.initialize());
app.use(passport.session());
app.use(methodOverride('_method'))
//used to create intro homepage for login
app.get("/", checkAuthenticated, (req, res) => {
    // provide user name upon load up
  res.render("index.ejs", { name: req.user.name });
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






//Arlos code below


// // bcrypt used to hash private information to make sure app information is secure
// const bcrypt = require("bcrypt");
// // flash wil be used to display messages upon error to the user
// const flash = require("express-flash");
// const session = require("express-session");
// const methodOverride = require('method-override')

// const initializePassport = require("./passport-config");
// const passport = require("passport");
// // used to make user information matches the email given 
// initializePassport(
//   passport,
//   (email) => users.find((user) => user.email === email),
//   (id) => users.find((user) => user.id === id)
// );
// // used to store user information in a local variable
// // temporality used unless connected to database
// // const users = [];

// //used to connect to ejs dependencies
// app.set("view-engine", "ejs");
// app.use(express.urlencoded({ extended: false }));
// app.use(flash());
// app.use(
//   session({
//     secret: process.env.SESSION_SECRET,
//     resave: false,
//     saveUninitialized: false,
//   })
// );

// app.use(passport.initialize());
// app.use(passport.session());
// app.use(methodOverride('_method'))
// //used to create intro homepage for login
// app.get("/", checkAuthenticated, (req, res) => {
//     // provide user name upon load up
//   res.render("index.ejs", { name: req.user.name });
// });

// // used to connect to login.ejs
// app.get("/login", checkNotAuthenticated, (req, res) => {
//   res.render("login.ejs");
// });

// // used to connect to action of post in login.ejs
// app.post("/login", checkNotAuthenticated, passport.authenticate("local", {
//     successRedirect: "/",
//     failureRedirect: "/login",
//     failureFlash: true,
//   })
// );

// // used to connect to register.ejs
// app.get("/register", checkNotAuthenticated, (req, res) => {
//   res.render("register.ejs");
// });

// // used to connect to action of post in register.ejs
// app.post("/register", checkNotAuthenticated, async (req, res) => {
//   try {
//     const hashedPassword = await bcrypt.hash(req.body.password, 10);
//     users.push({
//       id: Date.now().toString(),
//       // using req.body connects to name='' fields under register.ejs
//       name: req.body.name,
//       email: req.body.email,
//       password: hashedPassword,
//     });
//     // if successful user can login with registered info
//     res.redirect("/login");
//   } catch {
//     // if unsuccessful return back to register
//     res.redirect("/register");
//   }
//   console.log(users);
// });

// app.delete('/logout', (req, res) => {
//     // passport provides to clear session and logout user
//     req.logout()
//     res.redirect('/login')
// })

// // check if user is authenticated
// function checkAuthenticated(req, res, next) {
//     if(req.isAuthenticated()) {
//         return next()
//     }
//     // if no user information, user is sent back to login
//     res.redirect('/login')
// }

// function checkNotAuthenticated(req, res, next) {
//     if (req.isAuthenticated()) {
//         // if user is authenticated redirect to homepage
//         return res.redirect('/')
//     }
//     // if not authenitcated 
//     next()
// }


