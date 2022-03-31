const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Appointments extends Model { }

Appointments.init(
    {
      appointment_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
        
        client_id: {
            type: DataTypes.INTEGER,
            references: {
              model: 'users',
              key: 'user_id'
            }            
        },
        handyman_id: {
          type: DataTypes.INTEGER,
          references: {
            model: 'users',
            key: 'user_id'
          }
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