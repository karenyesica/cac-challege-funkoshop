const express = require('express');
const authControllers = require('./controllers/authController');
const router = express.Router();

router.get('/auth/login', authControllers.login);
router.post('/auth/login', authControllers.login);
router.get('/auth/register', authControllers.register);
router.post('/auth/register', authControllers.register);
router.get('/auth/logout', authControllers.logout);

module.exports = router;