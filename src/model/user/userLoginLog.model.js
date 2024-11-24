const { DataTypes } = require('sequelize');

const sequelize = require('../../db');

const UserLoginLog = sequelize.define('user_login_log', {
  login_type: {
    type: DataTypes.INTEGER,
    allowNull: false,
    comment: '登录是否成功: 0-未成功 1-成功',
  },
});

module.exports = UserLoginLog;
