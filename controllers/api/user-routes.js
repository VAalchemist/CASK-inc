const router = require('express').Router();
const { User, Client } = require('../../models/');


//route to create user (/api/users)
router.post('/', (req, res) => {
    //expect obj {address1,address2,city,state,zipcode}
    console.log("trying to create");
    User.create({
        profile_pic: req.body.profile_pic,
        name: req.body.name,
        address1: req.body.address1,
        address2: req.body.address2,
        city: req.body.city,
        state: req.body.state,
        zipcode: req.body.zipcode,
        is_client: req.body.is_client,
    })
        .then(dbUserData => {
            if (!dbUserData.is_client) {
                return res.json(dbUserData);
            }
            Client.create({
                email: req.body.email,
                password: req.body.password,
                user_id: dbUserData.user_id
            }).then(dbClientData => { res.json(dbClientData) });

        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

router.get('/', (req, res) => {
    console.log("trying to get");
    User.findAll({
        where: {
            is_client: false
        }
    })
        .then(dbUserData => res.json(dbUserData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});


router.get('/clients', (req, res) => {
    console.log("trying to get client");
    User.findAll({
        where: {
            is_client: true
        }
    })
        .then(dbUserData => res.json(dbUserData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

router.post('/login', (req, res) => {
    // expects {email: 'lernantino@gmail.com', password: 'password1234'}
    // console.log(req.body.email);
    Client.findOne({
      where: {
        email: req.body.email
      }
    }).then(dbUserData => {
      if (!dbUserData) {
        res.status(400).json({ message: 'No user with that email address!' });
        return;
      }
  
    //   const validPassword = dbUserData.checkPassword(req.body.password);
      console.log(dbUserData.password , " " , req.body.password)
      if (!req.body.password === dbUserData.password) {
        res.status(400).json({ message: 'Incorrect password!' });
        return;
      }
      console.log("logged in!!");
      res.json();
    });
  });

module.exports = router;