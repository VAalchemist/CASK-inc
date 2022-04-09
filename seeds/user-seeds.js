const sequelize = require('../config/connection');
const { User, Post } = require('../models');

const userdata = [
  {
    profile_pic: 'https://www.asbestos.com/wp-content/uploads/carpenter-asbestos-exposure-368x276-c-default.jpg',
    name: 'Bob the Carpenter',
    address1: '123 ST',
    address2: '',
    city: 'Bobopilis',
    state: 'CA',
    zipcode: '90250',
    is_client: false
  },
  {
    profile_pic: 'https://image.shutterstock.com/image-photo/smiling-handsome-electrician-repairing-electrical-260nw-1192486423.jpg',
    name: 'Bill the Electrician',
    address1: '123 ST',
    address2: '',
    city: 'Bobopilis',
    state: 'CA',
    zipcode: '90250',
    is_client: false
  },
  {
    profile_pic: 'https://www.asbestos.com/wp-content/uploads/carpenter-asbestos-exposure-368x276-c-default.jpg',
    name: 'Jake the Mechanic',
    address1: '123 ST',
    address2: '',
    city: 'Bobopilis',
    state: 'CA',
    zipcode: '90250',
    is_client: false
  },
  {
    profile_pic: '',
    name: 'Michelle the Gardner',
    address1: '123 ST',
    address2: '',
    city: 'Bobopilis',
    state: 'CA',
    zipcode: '90250',
    is_client: false
  },
  {
    profile_pic: '',
    name: 'Zack the Contractor',
    address1: '123 ST',
    address2: '',
    city: 'Bobopilis',
    state: 'CA',
    zipcode: '90250',
    is_client: false
  },
  {
    profile_pic: '',
    name: 'Todd the Roofer',
    address1: '123 ST',
    address2: '',
    city: 'Bobopilis',
    state: 'CA',
    zipcode: '90250',
    is_client: false
  },
  {
    profile_pic: '',
    name: 'Scott the Plumber',
    address1: '123 ST',
    address2: '',
    city: 'Bobopilis',
    state: 'CA',
    zipcode: '90250',
    is_client: false
  },
  {
    profile_pic: '',
    name: 'Sam the Pool Cleaner',
    address1: '123 ST',
    address2: '',
    city: 'Bobopilis',
    state: 'CA',
    zipcode: '90250',
    is_client: false
  }
];

const seedUsers = () => User.bulkCreate(userdata, {individualHooks: true});

module.exports = seedUsers;
