const router = require('express').Router();
const { Rating } = require('../../models/');

router.post('/', (req, res) => {
    //expect obj {profile_pic, name, address1, address2, city, state, zipcode, is_client, email, password}
    console.log("trying to create");
    Rating.create({
        //get data from bodyy and assigning to to attributes
        client_id: req.body.client_id,
        handyman_id: req.body.handyman_id,
        appointment_id: req.body.appointment_id,
        rating_text: req.body.rating_text,
        star_rating: req.body.star_rating,

    })
        .then(dbRatingData => {
            res.json(dbRatingData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});


router.get('/', (req, res) => {
    console.log("trying to get");
    Rating.findAll({
    })
        .then(dbRatingData => res.json(dbRatingData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});
module.exports = router;