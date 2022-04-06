const router = require('express').Router();
const { User, Client } = require('../../models/');
const bcrypt = require('bcrypt');
const cloudinary = require('cloudinary');
const multer = require('multer');
const path = require('path');
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'Images')
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname))
  }
})
const upload = multer({storage: storage})


//post route to create user (/api/user)
router.post('/', async (req, res) => {
    //expect obj {profile_pic, name, address1, address2, city, state, zipcode, is_client, email, password}
    const hashPW = await bcrypt.hash(req.body.password, 10);
    User.create({
        //get data from bodyy and assigning to to attributes
        profile_pic: req.body.profile_pic,
        name: req.body.name,
        address1: req.body.address1,
        address2: req.body.address2,
        city: req.body.city,
        state: req.body.state,
        zipcode: req.body.zipcode,
        is_client: req.body.is_client
    })
        .then(dbUserData => {
            if (!dbUserData.is_client) {
                return res.json(dbUserData);
            }
            
            //create client based off of user
            Client.create({
                email: req.body.email,
                password: hashPW,
                user_id: dbUserData.user_id,
                name: dbUserData.name,
            }).then(dbClientData => { 
              req.session.user_id = dbUserData.user_id;
              req.session.name = dbUserData.name;
              req.session.email = dbUserData.email;
              req.session.loggedIn = true;
              res.json(dbClientData) });

        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});
//get route api/user to get handymans
router.get('/', (req, res) => {
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

router.get('/client', (req,res) => {
  User.findOne({
    attributes: { exclude: ['address1','address2','city','state','zipcode'] },
    where: {
      user_id: req.session.user_id
    }

  }).then(dbUserData => {
    console.log(dbUserData);
    if(!dbUserData){
      res.status(404).json({ message: 'No user found with this id' });
      return;
    }
    res.json(dbUserData);
  })

});

//get route api/user/clients to get clients
router.get('/clients', (req, res) => {
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
//post route api/user/login to find if client exists
router.post('/login', async (req, res) => {
    // expects {email: 'lernantino@gmail.com', password: 'password1234'
    Client.findOne({
      where: {
        email: req.body.email
      }
    }).then(dbUserData => {
      if (!dbUserData) {
        res.status(400).json({ message: 'No user with that email address!' });
        return;
      }  

      if (!bcrypt.compareSync(req.body.password, dbUserData.password)) {
        console.log("wrong password");
        res.status(400).json();
      }
      else {

          req.session.user_id = dbUserData.user_id;
          req.session.name = dbUserData.name;
          req.session.email = dbUserData.email;
          req.session.loggedIn = true;
        res.json(dbUserData);
      }      
      
    });

  });

  router.post('/logout', (req, res) => {
    if (req.session.loggedIn) {
      req.session.destroy(() => {
        res.status(204).end();
      });
    }
    else {
      res.status(404).end();
    }
  });


  router.post('/upload', upload.single('image'), (req, res) => {
    console.log(req.file.path);
    cloudinary.uploader.upload(req.file.path, (response,err) => {
      console.log("error" , err);
      
      if(!err){
        console.log("response");
        User.update(
          {profile_pic: response.url},
          {where: {user_id: 1}});
      }
      else console.log("error");

    })
    res.redirect("/index");
  });

module.exports = router;