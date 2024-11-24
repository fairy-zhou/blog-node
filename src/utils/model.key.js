const { DataTypes } = require('sequelize');

const moduleStatus = option => {
  return {
    type: DataTypes.INTEGER,
    allowNull: false,
    comment:
      option.comment || `${option.commentName}状态：0-删除 1-启用 2-未启用`,
    validate: {
      isIn: option.isIn || [[0, 1, 2]],
    },
    defaultValue: option.defaultValue || 2,
  };
};

module.exports = { moduleStatus };
