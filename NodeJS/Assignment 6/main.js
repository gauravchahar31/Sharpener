const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const shopRoutes = require('./routes/shop');
const adminRoutes = require('./routes/admin')

app.use(bodyParser.urlencoded({extended: true}));
app.use('/admin', adminRoutes);
app.use('/shop', shopRoutes);

app.get('*', (req, res) => {
    res.send('No Page Found');
})

app.listen(3000);