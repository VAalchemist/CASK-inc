const { Rating } = require('../models');

const ratingdata = [
  {
    
  }
];

const seedRatings = () => Rating.bulkCreate(ratingdata);

module.exports = seedRatings;


