const express = require("express");
const app = express();
// bcrypt used to hash private information to make sure app information is secure
const bcrypt = require("bcrypt");

// used to store user information in a local variable
// temporalily used unless connected to database
const users = [];

//used to connect to ejs dependencies
app.set("view-engine", "ejs");
app.use(express.urlencoded({ extended: false }));

//used to create intro homepage for login
app.get("/", (req, res) => {
  res.render("index.ejs");
});

// used to connect to login.ejs
app.get("/login", (req, res) => {
  res.render("login.ejs");
});

// used to connect to action of post in login.ejs
app.post("/login", (req, res) => {});

// used to connect to register.ejs
app.get("/register", (req, res) => {
  res.render("register.ejs");
});

// used to connect to action of post in register.ejs
app.post("/register", async (req, res) => {
  try {
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    users.push({
      id: Date.now().toString(),
      // using req.body connects to name='' fields under register.ejs
      name: req.body.name,
      email: req.body.email,
      password: hashedPassword,
    });
    // if successful user can login with registered info
    res.redirect("/login");
  } catch {
    // if unsuccessful return back to register
    res.redirect("/register");
  }
  console.log(users)
});

app.listen(3000);
