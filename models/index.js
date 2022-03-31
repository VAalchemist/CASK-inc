// import all models

// const Duties = require('./Duties');
const User = require('./User');
const Client = require('./Client');
// const Appointments = require('./Appointments');
// const Rating = require('./Rating');
// const Message = require('./Message');

Client.belongsTo(User,{
    foreignKey: 'user_id'
});

// User.hasMany(Appointments, {
//     foreignKey: ''

// });





//TODO: figure our relation of tables
// create associations

// User.hasMany(Rating, {
//   foreignKey: 'user_id'
// });

// Post.belongsTo(User, {
//   foreignKey: 'user_id',
//   onDelete: 'SET NULL'
// });

// User.belongsToMany(Post, {
//   through: Vote,
//   as: 'voted_posts',

//   foreignKey: 'user_id',
//   onDelete: 'SET NULL'
// });

// Post.belongsToMany(User, {
//   through: Vote,
//   as: 'voted_posts',
//   foreignKey: 'post_id',
//   onDelete: 'SET NULL'
// });

// Vote.belongsTo(User, {
//   foreignKey: 'user_id',
//   onDelete: 'SET NULL'
// });

// Vote.belongsTo(Post, {
//   foreignKey: 'post_id',
//   onDelete: 'SET NULL'
// });

// User.hasMany(Vote, {
//   foreignKey: 'user_id'
// });

// Post.hasMany(Vote, {
//   foreignKey: 'post_id'
// });

// Comment.belongsTo(User, {
//   foreignKey: 'user_id',
//   onDelete: 'SET NULL'
// });

// Comment.belongsTo(Post, {
//   foreignKey: 'post_id',
//   onDelete: 'SET NULL'
// });

// User.hasMany(Comment, {
//   foreignKey: 'user_id',
//   onDelete: 'SET NULL'
// });

// Post.hasMany(Comment, {
//   foreignKey: 'post_id'
// });

module.exports = { User, Client};
