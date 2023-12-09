const express = require('express');

const router = express.Router();

router.get('/', (req, res) => res.send('Esta es la vista de Home'));
router.get('/contact', (req, res) => res.send('Esta es la vista de Contacto'));
router.get('/about', (req, res) => res.send('Esta es la vista de Nosotros'));
router.get('/faqs', (req, res) => res.send('Esta es la vista de Preguntas Frecuentes'));

module.exports = router;