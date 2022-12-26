const UserController = require('../controller/userController');

const router = require('express').Router();

router.get('/user', UserController.index);
router.post('/user', UserController.store);
router.delete('/user/:id', UserController.destroy);

module.exports = router;