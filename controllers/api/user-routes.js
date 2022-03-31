const router = require('express').Router();
const {User,Client} = require('../../models/');


//route to create user (/api/users)
router.post('/',(req,res) => {
    //expect obj {address1,address2,city,state,zipcode}
    console.log("trying to create");
    User.create({
        address1: req.body.address1,
        address2: req.body.address2,
        city: req.body.city,
        state: req.body.state,
        zipcode: req.body.zipcode,
    })
    .then(dbUserData => res.json(dbUserData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
});

router.get('/', (req,res) => {
    console.log("trying to get");
    User.findAll()
    .then(dbUserData => res.json(dbUserData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

module.exports = router;