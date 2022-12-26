const UserController = require('../controller/userController');

const router = require('express').Router();

router.get('/client', UserController.index);
router.post('/client', UserController.store);
router.delete('/client/:id', UserController.index);

module.exports = router;