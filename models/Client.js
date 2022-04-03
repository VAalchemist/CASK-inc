const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Client extends Model {}

Client.init(
    {
        client_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        email: {
            type: DataTypes.STRING
        },
        password: {
            type: DataTypes.STRING
        },
        user_id: {
            type: DataTypes.INTEGER,
            references: {
              model: 'user',
              key: 'user_id'
            }
        }      
    },
    {
      sequelize,
      timestamps: false,
      // Prevent sequelize from renaming the table
      freezeTableName: true,
      underscored: true,
      modelName: 'client'
    }
  );

  module.exports = Client;