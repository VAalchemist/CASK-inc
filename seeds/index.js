// const seedUsers = require('./user-seeds');
const seedAppointments = require('./appointment-seeds');
const seedRatings = require('./rating-seeds');
const seedDuties = require('./duty-seeds');

const sequelize = require('../config/connection');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('--------------');
  await seedUsers();
  console.log('--------------');

  await seedAppointments();
  console.log('--------------');

  await seedRatings();
  console.log('--------------');

  await seedDuties();
  console.log('--------------');

  process.exit(0);
};

seedAll();
