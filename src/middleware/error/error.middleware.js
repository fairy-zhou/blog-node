const { ValidationError } = require('sequelize');

const errorHandle = async (ctx, next) => {
  try {
    await next();
  } catch (err) {
    let error = err.message || '';
    let message = err.error || 'Internal Server Error';

    ctx.status = err.status || err.statusCode || 500;
    
    // 处理ctx.thorw抛出的错误
    if (err.name === 'InternalServerError') {
      error = err.error;
      message = err.message;
    }
    // 处理sequelize类型检查抛出的错误
    else if (err instanceof ValidationError) {
      ctx.status = 400;

      error = err.errors.map(item => item.message);
      message = '请求参数错误';
    }

    if (ctx.status === 500) {
      // 记录500错误
      console.log(error);
    }

    ctx.body = {
      message,
      error,
    };
  }
};

module.exports = {
  errorHandle,
};
