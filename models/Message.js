const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Message extends Model {}

Message.init(
  {
    message_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    message_text: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    handyman_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'user',
        key: 'user_id'
      }
    },
    client_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'client',
        key: 'client_id'
      }
    }
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'message'
  }
);

module.exports = Message;
