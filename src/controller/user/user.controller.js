const { createUserInfo } = require('../../service');

const register = async (ctx, next) => {
  const { login_name, password, platform } = ctx.request.body;
  
  const res = await createUserInfo({
    login_name,
    password,
    platform,
    status: 1,
  });
};

module.exports = {
  register,
};
