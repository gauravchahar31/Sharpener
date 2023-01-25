const express = require('express');
const router = express.Router();

const productController = require('../controllers/product');

router.get('/', productController.fetchProducts);
router.post('/add', productController.addProduct);
router.post('/delete/:id', productController.deleteProduct);

module.exports = router;