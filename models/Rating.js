const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Rating extends Model {}

Rating.init(
  {
    rating_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    client_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'user',
        key: 'user_id'
      }
    },
    handyman_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'user',
        key: 'user_id'
      }
    },
    appointment_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'appointments',
        key: 'appointment_id'
      }

    },
    rating_text: {
      type: DataTypes.STRING,      

    },
    star_rating: {
      type: DataTypes.INTEGER,
    },
  },
  {
    sequelize,
    timestamps: false,
    // Prevent sequelize from renaming the table
    freezeTableName: true,
    underscored: true,
    modelName: "rating",
  }
);

module.exports = Rating;
