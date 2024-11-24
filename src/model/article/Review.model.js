const { DataTypes } = require('sequelize');

const sequelize = require('../../db');
const { isFind, moduleStatus } = require('../../utils');

const Review = sequelize.define('review', {
  p_id: {
    type: DataTypes.STRING(20),
    comment: '对应表id,父栏目id',
    validate: {
      isFind: () => {
        isFind(Review, 'id', 'p_id');
      },
    },
  },
  review_content: {
    type: DataTypes.STRING,
    allowNull: false,
    comment: '评论的内容'
  },
  status: moduleStatus({
    commentName: '评论',
  }),
});

module.exports = Review;
