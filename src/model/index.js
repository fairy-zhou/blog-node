const sequelize = require('../db');

const User = require('./user/user.model');
const UserInfo = require('./user/userInfo.model');
const UserLogin = require('./user/userLogin.model');
const UserLoginLog = require('./user/userLoginLog.model');
const Permission = require('./permission/permission.model');
const Role = require('./permission/role.model');
const ArticleColumn = require('./article/articleColumn.model');
const Article = require('./article/article.model');
const Review = require('./article/Review.model');
const Tag = require('./tag/tag.model');
const Collect = require('./other/collect.model');
const Like = require('./other/like.model');

// 一对一
// 登录信息和用户信息
UserLogin.hasOne(UserInfo, {
  foreignKey: {
    allowNull: false
  }
});

UserInfo.belongsTo(UserLogin);

// 一对多
// 登录信息和登录日志
UserLogin.hasMany(UserLoginLog);

UserLoginLog.belongsTo(UserLogin);

//用户和文章
Article.hasMany(UserInfo);

UserInfo.belongsTo(Article);

// 文章栏目和文章
Article.hasMany(ArticleColumn);

ArticleColumn.belongsTo(Article);

// 评论和文章
Review.hasMany(Article);

Article.belongsTo(Review);

// 收藏和文章
Collect.hasMany(Article);

Article.belongsTo(Collect);

// 收藏和用户信息
Collect.hasMany(UserInfo);

UserInfo.belongsTo(Collect);

// 点赞和文章
Like.hasMany(Article);

Article.belongsTo(Like);

// 点赞和用户信息
Like.hasMany(UserInfo);

UserInfo.belongsTo(Like);

// 多对多
UserInfo.belongsToMany(Role, { through: "UserRole" });
Role.belongsToMany(UserInfo, { through: "UserRole" });

Permission.belongsToMany(Role, { through: "RolePermission" });
Role.belongsToMany(Permission, { through: "RolePermission" });

Tag.belongsToMany(Article, { through: "TagArticle" });
Article.belongsToMany(Tag, { through: "TagArticle" });

// sequelize.sync({ force: true });

module.exports = {
  User,
  UserInfo,
  UserLogin,
  UserLoginLog,
  Permission,
  Role,
  Article,
  ArticleColumn,
  Review,
  Tag,
  Collect,
  Like,
};
