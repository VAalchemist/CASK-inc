const router = require('express').Router();
const { Duties } = require('../../models/');

router.post('/', (req, res) => {
    //expect obj {profile_pic, name, address1, address2, city, state, zipcode, is_client, email, password}
    console.log("trying to create");
    Duties.create({
        //get data from bodyy and assigning to to attributes
        user_id: req.body.user_id,
        electrician: req.body.electrician,
        gardener: req.body.gardener,
        plumber: req.body.plumber,
        carpenter: req.body.carpenter,
        mechanic: req.body.mechanic,
        pool_maintenance: req.body.pool_maintenance,
        roofer: req.body.roofer,
        contractor: req.body.contractor,
    })
        .then(dbAppointmentsData => {
            res.json(dbAppointmentsData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});


router.get('/', (req, res) => {
    console.log("trying to get");
    Duties.findAll({
    })
        .then(dbAppointmentsData => res.json(dbAppointmentsData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});
module.exports = router;