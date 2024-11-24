const { DataTypes } = require('sequelize');

const sequelize = require('../../db');
const { isUnique, moduleStatus } = require('../../utils');

const UserLogin = sequelize.define('user_login', {
  login_name: {
    type: DataTypes.STRING(32),
    unique: true,
    allowNull: false,
    comment: '登录用户名',
    validate: {
      notNull: true,
      is: {
        args: /^(?![0-9]+)(?![a-zA-Z]+)[0-9A-Za-z]{8,16}$/,
        msg: 'login_name can only include numbers, letters, 8-16 digits',
      },
      isUnique: () => {
        isUnique(UserLogin, 'login_name');
      },
    },
  },
  password: {
    type: DataTypes.STRING(32),
    unique: true,
    allowNull: false,
    comment: '登录密码',
    validate: {
      notNull: true,
      is: {
        args: /(?!.*\s)(?!^[0-9]+$)(?!^[a-z]+$)(?![^a-z0-9]+$)^.{8,16}$/,
        msg: 'password can only include numbers, letters, special characters, at least two types, 8-16 digits',
      },
    },
  },
  platform: {
    type: DataTypes.INTEGER,
    allowNull: false,
    comment: '平台类型：0-后台 1-pc 2-移动端',
    validate: {
      isIn: [[0, 1, 2]],
    },
  },
  status: moduleStatus({
    comment: '用户状态: 0-删除 1-正常状态 2-黑名单 3-白名单',
    validate: [[0, 1, 2, 3]],
    defaultValue: 1,
  }),
});

// UserLogin.sync({ force: true });

module.exports = UserLogin;
