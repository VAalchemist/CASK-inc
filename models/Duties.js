const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Duties extends Model {}

Duties.init(
    {
        user_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
        },
        electrician: {
            type: DataTypes.BOOLEAN
        },
        gardener: {
            type: DataTypes.BOOLEAN
        },
        plumber: {
            type: DataTypes.BOOLEAN
        },
        carpenter: {
            type: DataTypes.BOOLEAN
        },
        mechanic: {
            type: DataTypes.BOOLEAN
        },
        pool_maintenance: {
            type: DataTypes.BOOLEAN
        },
        roofer: {
            type: DataTypes.BOOLEAN
        },
        contractor: {
            type: DataTypes.BOOLEAN
        },
    },
    {
      sequelize,
      timestamps: false,
      // Prevent sequelize from renaming the table
      freezeTableName: true,
      underscored: true,
      modelName: 'duties'
    }
  );

  module.exports = Duties;