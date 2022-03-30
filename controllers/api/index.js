const router = require('express').Router();

const usersRoutes = require('./users-routes.js');
const appointmentsRoutes = require('./appointments-routes');
const dutiesRoutes = require('./duties-routes');
const messageRoutes = require('./message-routes');
const ratingRoutes = require('./rating-routes');

router.use('/users', usersRoutes);
router.use('/appointments', appointmentsRoutes);
router.use('/duties', dutiesRoutes);
router.use('/message', messageRoutes);
router.use('/ratings', ratingRoutes);


module.exports = router;