const express = require('express');
const shopControllers = require('./controllers/shopController');
const router = express.Router();

router.get('/shop', shopControllers.shop);
router.get('/shop/item/:id', shopControllers.item);
router.post('/shop/item/:id/add', shopControllers.item);
router.get('/shop/cart', shopControllers.cart);
router.post('/shop/cart', shopControllers.cart);

module.exports = router;