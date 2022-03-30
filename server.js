const express = require('express');
const app = express()

//used to connect to ejs dependencies
app.set ('view-engine', 'ejs')

//used to create intro homepage for login
app.get('/', (req, res) => {
    res.render('index.ejs')
})

// used to connectç to login.ejs
app.get('/login', (req, res) => {
    res.render('login.ejs')
})

// used to connect to register.ejs
app.get('/register', (req, res) => {
    res.render('register.ejs')
})

// used to connect to action of post in register.ejs
app.post('/register', (req, res) => {

})

app.listen(3000)