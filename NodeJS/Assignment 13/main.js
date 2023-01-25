const express = require('express')
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.json());


const shopRoutes = require('./routes/shop');
const cartRoutes = require('./routes/cart');
const productRoutes = require('./routes/product');

app.use('/shop', shopRoutes);
app.use('/cart', cartRoutes);
app.use('/product', productRoutes);

app.listen(3000);