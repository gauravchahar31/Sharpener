const express = require('express');
const router = express.Router();

const cartController = require('../controllers/cart');

router.get('/', cartController.showCart);
router.post('/add', cartController.addItemToCart);
router.post('/delete/:id', cartController.deleteItemFromCart);

module.exports = router;