const express = require('express');
const adminControllers = require('./controllers/adminController');
const router = express.Router();

router.get('/admin', adminControllers.admin);
router.get('/admin/create', adminControllers.create);
router.post('/admin/create', adminControllers.create);
router.get('/admin/edit/:id', adminControllers.edit);
router.post('/admin/edit/:id', adminControllers.edit);
router.delete('/delete/:id', adminControllers.delete);

module.exports = router;