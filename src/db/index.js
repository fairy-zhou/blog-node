const { Sequelize } = require('sequelize');

const {
  MYSQL_DB,
  MYSQL_USER,
  MYSQL_PWD,
  MYSQL_HOST,
  MYSQL_DIALECT,
} = require('../config');

console.log(MYSQL_DB, MYSQL_USER, MYSQL_PWD, MYSQL_HOST, MYSQL_DIALECT);

const seq = new Sequelize(MYSQL_DB, MYSQL_USER, MYSQL_PWD, {
  host: MYSQL_HOST,
  dialect: MYSQL_DIALECT,
});

seq
  .authenticate()
  .then(() => {
    console.log('数据库连接成功');
  })
  .catch(err => {
    console.log('数据库连接失败', err);
  });

module.exports = seq;
