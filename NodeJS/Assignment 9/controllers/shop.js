const path = require('path');
const rootDir = path.dirname(require.main.filename);
const Product = require('../models/product');

exports.homePage = (req, res) => {
    res.sendFile(path.join(rootDir, 'views', 'shop.html'));
}

exports.getProducts = (req, res) => {
    res.send(Product.fetchProducts());
}