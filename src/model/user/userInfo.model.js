const { DataTypes } = require('sequelize');

const sequelize = require('../../db');
const { moduleStatus } = require('../../utils');

const UserInfo = sequelize.define('user_info', {
  user_name: {
    type: DataTypes.STRING(32),
    comment: '用户名字',
  },
  mobile_phone: {
    type: DataTypes.INTEGER,
    validate: {
      is: {
        args: /^1[3-9]\d{9}$/,
        msg: 'mobile_phone format is incorrect',
      },
    },
    comment: '手机号',
  },
  email: {
    type: DataTypes.STRING,
    validate: {
      isEmail: true,
    },
    comment: '邮箱',
  },
  gender: {
    type: DataTypes.INTEGER,
    validate: {
      isIn: [[0, 1, 2]],
    },
    comment: '性别: 0-未知 1-男 2-女',
    defaultValue: 0,
  },
  avatar: {
    type: DataTypes.STRING,
    comment: '用户头像(图片地址url)',
    validate: {
      isUrl: true,
    },
  },
  audit_avatar: {
    type: DataTypes.STRING,
    allowNull: false,
    comment: '审核通过用户头像(图片地址url)',
    validate: {
      isUrl: true,
    },
  },
  status: moduleStatus({ commentName: '头像' }),
});

module.exports = UserInfo;
