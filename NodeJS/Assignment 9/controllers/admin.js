const path = require('path');
const rootDir = path.dirname(require.main.filename);
const Product = require('../models/product');

exports.addProductPage = (req, res) => {
    res.sendFile(path.join(rootDir, 'views', 'addProduct.html'));
}

exports.saveProduct = (req, res) => {
    const newProduct = new Product(req.body.name, req.body.image, req.body.price);
    newProduct.save();
    res.redirect('/');
}

exports.deleteProduct = (req, res) => {
    const productID = req.params.productID;
    Product.deleteProduct(productID);
    res.redirect('/');
}

