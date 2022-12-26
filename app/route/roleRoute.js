const RoleController = require('../controller/roleController');

const router = require('express').Router();

router.get('/role', RoleController.index);
router.post('/role', RoleController.store);
router.delete('/role/:id', RoleController.destroy);

module.exports = router;