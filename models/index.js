// import all models

const Duties = require('./Duties');
const User = require('./User');
const Client = require('./Client');
const Appointments = require('./Appointments');
const Rating = require('./Rating');
// const Message = require('./Message');

Client.belongsTo(User,{
    foreignKey: 'user_id'
});

User.hasMany(Rating,{
    foreignKey: 'handyman_id'
});

User.hasMany(Appointments,{
    foreignKey: 'handyman_id'
});

User.belongsTo(Duties,{
    foreignKey: 'user_id'
});

module.exports = { User, Client, Duties, Appointments, Rating};
