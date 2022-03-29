const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Appointments extends Model { }

Appointments.init(
    {
        user_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        handyman_id: {
          type: DataTypes.INTEGER,
          foreignKey: true,
        },
        date: {
            type: DataTypes.STRING
        },
    },
    {
      sequelize,
      timestamps: false,
      // Prevent sequelize from renaming the table
      freezeTableName: true,
      underscored: true,
      modelName: 'appointments'
    }
  );

  module.exports = Appointments;