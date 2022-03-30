const express = require('express');
const app = express()
// bcrypt used to hash private information to make sure app information is secure
const bcrypt = require('bcrypt')

// used to store user information in a local variable
// temporalily used unless connected to database
const users =[]

//used to connect to ejs dependencies
app.set ('view-engine', 'ejs')
app.use(express.urlencoded({ extended: false }))

//used to create intro homepage for login
app.get('/', (req, res) => {
    res.render('index.ejs')
})

// used to connectç to login.ejs
app.get('/login', (req, res) => {
    res.render('login.ejs')
})

// used to connect to action of post in login.ejs
app.post('/login', (req, res) => {

})
 
// used to connect to register.ejs
app.get('/register', (req, res) => {
    res.render('register.ejs')
})

// used to connect to action of post in register.ejs
app.post('/register', (req, res) => {
    // using req.body connects to name='' fields under register.ejs
    req.body.email
})

app.listen(3000)