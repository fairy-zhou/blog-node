const Koa = require('koa');
const { koaBody } = require('koa-body');

const { APP_PORT } = require('./config');
const router = require('./router');
const { errorHandle} = require('./middleware');

const app = new Koa();


app.use(errorHandle).use(koaBody()).use(router.routes()).use(router.allowedMethods());

app.listen(APP_PORT, () => {
  console.log('server is running on http://localhost:' + APP_PORT);
});
