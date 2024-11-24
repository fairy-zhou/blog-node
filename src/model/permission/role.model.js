const { DataTypes } = require('sequelize');

const sequelize = require('../../db');
const { moduleStatus } = require('../../utils');

const Rloe = sequelize.define('role', {
  role_name: {
    type: DataTypes.STRING(20),
    unique: true,
    allowNull: false,
    comment: '角色名称',
  },
  status: moduleStatus({
    commentName: '角色',
  }),
});

module.exports = Rloe;
