const Router = require('koa-router');
const router = new Router();

// 这里可以写你的其他路由，比如：
router.get('/', async (ctx) => {
    ctx.body = 'RSSHub is running';
});

// 新增东方财富用户发言路由
router.get('/eastmoney/user/:uid', require('./routes/eastmoney/user'));

// 你可以在这里继续添加其他自定义路由
// router.get('/some/other/route', require('./routes/other-route'));

module.exports = router;

