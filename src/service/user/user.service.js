const { UserLogin } = require('../../model');

const createUserInfo = async params => {
  return UserLogin.create(params);
};

module.exports = { createUserInfo };
