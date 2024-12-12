'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Room extends Model {
    static associate(models) {
      // Define associations here if necessary
    }
  }
  Room.init(
    {
      room_number: { type: DataTypes.STRING, allowNull: false, unique: true },
      room_type: DataTypes.STRING,
      price: { type: DataTypes.DECIMAL(10, 2), allowNull: false },
      status: { type: DataTypes.STRING, defaultValue: 'Available' }
    },
    {
      sequelize,
      modelName: 'Room',
    }
  );
  return Room;
};
