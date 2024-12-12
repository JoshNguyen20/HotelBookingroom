'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Payment extends Model {
    static associate(models) {
      Payment.belongsTo(models.Booking, { foreignKey: 'booking_id' });
    }
  }
  Payment.init(
    {
      booking_id: { type: DataTypes.INTEGER, allowNull: false },
      payment_method: { type: DataTypes.STRING, allowNull: false },
      payment_status: { type: DataTypes.STRING, defaultValue: 'Pending' },
      amount: { type: DataTypes.DECIMAL(10, 2), allowNull: false },
      payment_date: { type: DataTypes.DATE, defaultValue: sequelize.fn('NOW') }
    },
    {
      sequelize,
      modelName: 'Payment',
    }
  );
  return Payment;
};
