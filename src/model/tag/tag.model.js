const { DataTypes } = require('sequelize');

const sequelize = require('../../db');
const { moduleStatus } = require('../../utils');

const Tag = sequelize.define('tag', {
  tag_name: {
    type: DataTypes.STRING(20),
    unique: true,
    allowNull: false,
    comment: '标签名称',
  },
  status: moduleStatus({
    commentName: '标签',
  }),
});

module.exports = Tag;
