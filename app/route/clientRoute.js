const UserController = require('../controller/userController');

const router = require('express').Router();

router.route('/')
    .get(UserController.index)
    .post(UserController.store);

router.delete('/:id', UserController.index);

module.exports = router;