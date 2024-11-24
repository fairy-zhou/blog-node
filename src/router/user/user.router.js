const Router = require('koa-router');

const { register } = require('../../controller');

const router = new Router({
  prefix: '/user',
});

router.post('/register', register);

module.exports = router;
