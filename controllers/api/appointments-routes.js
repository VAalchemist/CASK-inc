const router = require('express').Router();
const { Appointments, Client, User } = require('../../models/');

router.post('/', (req, res) => {
    //expect obj {profile_pic, name, address1, address2, city, state, zipcode, is_client, email, password}
    console.log("trying to create appointment");

    Appointments.create({
        //get data from bodyy and assigning to to attributes
        client_id: req.session.client_id,
        handyman_id: req.body.handyman_id,
        date: req.body.date
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
    console.log("userid ", req.session.user_id);
    Appointments.findAll({
        where: { client_id: req.session.client_id },
        include: [{
            model: Client,
            attributes: ['name']
        },
        {
            model: User,
            attributes: ['name']

        }]
    })
        .then(dbAppointmentsData => {
            res.json(dbAppointmentsData);
        })

        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});
module.exports = router;