const sequelize = require('../config/connection');
const { User, Appointment } = require('../models');

const appointmentdata = [
  
];

const seedAppointments = () => Appointment.bulkCreate(appointmentdata);

module.exports = seedAppointments;