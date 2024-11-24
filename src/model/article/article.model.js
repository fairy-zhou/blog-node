const { DataTypes } = require('sequelize');

const sequelize = require('../../db');
const { moduleStatus } = require('../../utils');

console.log(sequelize.model);


const Article = sequelize.define('article', {
  column_name: {
    type: DataTypes.STRING(20),
    unique: true,
    allowNull: false,
    comment: '文章分类名称',
  },
  article_name: {
    type: DataTypes.STRING(255),
    allowNull: false,
    comment: '文章名称',
  },
  article_content: {
    type: DataTypes.TEXT,
    allowNull: false,
    comment: '文章内容',
  },
  article_info: {
    type: DataTypes.TEXT('tiny'),
    comment: '文章描述信息',
  },
  article_count: {
    type: DataTypes.INTEGER,
    allowNull: false,
    comment: '文章访问总数量',
    defaultValue: 0,
  },
  article_type: {
    type: DataTypes.INTEGER,
    allowNull: false,
    comment: '文章来源情况：0-自创 1-转载',
    defaultValue: 0,
    validate: {
      isIn: [[0, 1]],
    },
  },
  article_from: {
    type: DataTypes.STRING(255),
    comment: '文章来源什么地址',
    validate: {
      isUrl: true,
      validateValue() {
        if (this.article_type == 1 && !this.article_from)
          throw new Error(
            'reprint the article, the source address of the article must be required'
          );
      },
    },
  },
  article_state: {
    type: DataTypes.INTEGER,
    allowNull: false,
    comment: '发布情况：0-草稿 1-发布',
    validate: {
      isIn: [[0, 1]],
    },
  },
  status: moduleStatus({
    commentName: '文章',
  }),
});

module.exports = Article;
