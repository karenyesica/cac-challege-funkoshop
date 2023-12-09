const express = require('express');

const router = express.Router();

router.get('/auth/login', (req, res) => res.send('Esta es la vista de Iniciar sesión'));
router.post('/auth/login', (req, res) => res.send('Esta es la vista de Iniciar sesión'));
router.get('/auth/register', (req, res) => res.send('Esta es la vista de Registrarse'));
router.post('/auth/register', (req, res) => res.send('Esta es la vista de Registrarse'));
router.get('/auth/logout', (req, res) => res.send('Esta es la vista de Salir'));

module.exports = router;