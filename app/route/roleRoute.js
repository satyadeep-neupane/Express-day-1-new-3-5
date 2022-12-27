const RoleController = require('../controller/roleController');

const router = require('express').Router();

router.route('/')
    .get(RoleController.index)
    .post(RoleController.store);

router.delete('/:id', RoleController.destroy);

module.exports = router;