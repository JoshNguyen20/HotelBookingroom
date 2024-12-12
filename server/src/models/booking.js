'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Booking extends Model {
    static associate(models) {
      Booking.belongsTo(models.User, { foreignKey: 'user_id' });
      Booking.belongsTo(models.Room, { foreignKey: 'room_id' });
    }
  }
  Booking.init(
    {
      user_id: { type: DataTypes.INTEGER, allowNull: false },
      room_id: { type: DataTypes.INTEGER, allowNull: false },
      check_in_date: { type: DataTypes.DATE, allowNull: false },
      check_out_date: { type: DataTypes.DATE, allowNull: false },
      status: { type: DataTypes.STRING, defaultValue: 'Pending' },
      total_price: { type: DataTypes.DECIMAL(10, 2), allowNull: false }
    },
    {
      sequelize,
      modelName: 'Booking',
    }
  );
  return Booking;
};
