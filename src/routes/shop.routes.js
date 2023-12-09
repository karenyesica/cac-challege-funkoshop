const express = require('express');

const router = express.Router();

router.get('/shop', (req, res) => res.send('Esta es la vista de Tienda'));
router.get('/shop/item/:id', (req, res) => res.send(`Esta es la vista de Ítem id: ${req.params.id}`));
router.post('/shop/item/:id/add', (req, res) => res.send('Esta es la vista de Agregar ítem al carrito'));
router.get('/shop/cart', (req, res) => res.send('Esta es la vista del Carrito de Compras'));
router.post('/shop/cart', (req, res) => res.send('Esta es la vista del Checkout del Carrito de Compras'));

module.exports = router;