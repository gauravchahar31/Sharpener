const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

const app = express()
app.use(bodyParser.urlencoded({extended: true}))
app.use(express.static('public'));
app.use(cors());

app.use('/admin', adminRoutes);
app.use(shopRoutes);

app.listen(3000);
