const { DataTypes } = require('sequelize');

const sequelize = require('../../db');
const { isFind, moduleStatus } = require('../../utils');

const Permission = sequelize.define('permission', {
  perm_name: {
    type: DataTypes.STRING(20),
    unique: true,
    allowNull: false,
    comment: '权限名称',
  },
  p_id: {
    type: DataTypes.STRING(20),
    comment: '权限父id 列表权限会嵌套',
    validate: {
      isFind: () => {
        isFind(Permission, 'id', 'p_id');
      },
    },
  },
  permission_value: {
    type: DataTypes.STRING(50),
    unique: true,
    allowNull: false,
    comment: '权限对应的值',
  },
  permission_type: {
    type: DataTypes.INTEGER,
    unique: true,
    comment: '权限对应的值',
    defaultValue: 0,
    validate: {
      isIn: {
        args: [[0, 1]],
      },
    },
  },
  status: moduleStatus({
    commentName: '权限',
  }),
});

module.exports = Permission;
