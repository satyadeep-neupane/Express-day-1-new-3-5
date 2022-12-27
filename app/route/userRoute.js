const UserController = require('../controller/userController');

const router = require('express').Router();

router.route('/')
    .get(UserController.index)
    .post(UserController.store);

router.delete('/:id', UserController.destroy);

module.exports = router;