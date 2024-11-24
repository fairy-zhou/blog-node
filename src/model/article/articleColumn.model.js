const { DataTypes } = require('sequelize');

const sequelize = require('../../db');
const { isFind, moduleStatus } = require('../../utils');

const ArticleColumn = sequelize.define('article_column', {
  column_name: {
    type: DataTypes.STRING(20),
    unique: true,
    allowNull: false,
    comment: '文章分类名称',
  },
  p_id: {
    type: DataTypes.STRING(20),
    comment: '对应表id,父栏目id',
    validate: {
      isFind: () => {
        isFind(articleColumn, 'id', 'p_id');
      },
    },
  },
  status: moduleStatus({
    commentName: '文章分类',
  }),
});

module.exports = ArticleColumn;
