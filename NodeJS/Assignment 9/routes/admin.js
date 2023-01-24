const express = require('express')
const router = express.Router();

const adminController = require('../controllers/admin');

router.get('/add-product', adminController.addProductPage);
router.post('/add-product', adminController.saveProduct);

module.exports = router