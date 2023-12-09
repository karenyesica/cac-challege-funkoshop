const express = require('express');

const router = express.Router();

router.get('/shop', (req, res) => res.send('Esta es la vista de Tienda'));
router.get('/shop/item/:id', (req, res) => res.send('Esta es la vista de Ítem'));
router.post('/shop/item/:id/add', (req, res) => res.send('Esta es la vista de Crear ítem'));
router.get('/shop/cart', (req, res) => res.send('Esta es la vista del Carrito de Compras'));
router.post('/shop/cart', (req, res) => res.send('Esta es la vista del Carrito de Compras'));

module.exports = router;