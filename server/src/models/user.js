'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      // Define associations here
    }
  }
  User.init(
    {
      username: { type: DataTypes.STRING, allowNull: false, unique: true },
      password: { type: DataTypes.STRING, allowNull: false },
      email: { type: DataTypes.STRING, allowNull: false, unique: true },
      full_name: DataTypes.STRING,
      phone_number: DataTypes.STRING,
      role: {
        type: DataTypes.ENUM('Client', 'Reception'), // Thêm giá trị Admin
        defaultValue: 'Client',
      },
    },
    {
      sequelize,
      modelName: 'User',
    }
  );
  return User;
};
