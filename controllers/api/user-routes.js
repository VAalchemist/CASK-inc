const router = require('express').Router();
const {User,Client} = require('../../models/');


//route to create user (/api/users)
router.post('/',(req,res) => {
    //expect obj {email,password}
});