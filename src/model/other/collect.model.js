const { DataTypes } = require('sequelize');

const sequelize = require('../../db');

const Collect = sequelize.define('collect', {
  user_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    comment: '对应user_infos表id',
  },
  article_id: {
    type: DataTypes.INTEGER,
    comment: '对应articles表id',
  },
});

module.exports = Collect;
