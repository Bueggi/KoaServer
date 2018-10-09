const Router = require('koa-router');
const router = new Router();
const userController = require('./controller/controller.js');

router.get('/', (ctx) => console.log('Funktioniert'));
router.get('/users', (ctx) => userController.getAllUsers);
router.post('/users', (ctx) => console.log('Funktioniert Post Users'));

module.exports = router;