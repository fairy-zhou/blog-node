const { DataTypes } = require('sequelize');

const sequelize = require('../../db');

const Like = sequelize.define(
  'like',
  {
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: '对应user_infos表id',
    },
    article_id: {
      type: DataTypes.INTEGER,
      comment: '对应articles表id',
    },
    review_id: {
      type: DataTypes.INTEGER,
      comment: '对应reviews表id',
    },
  },
  {
    sequelize,
    validate: {
      only() {
        if ((this.article_id && this.review_id) || (!this.article_id && !this.review_id))
          throw new Error(
            'only one article_id and review_id can exist'
          );
      },
    },
  }
);

module.exports = Like;
