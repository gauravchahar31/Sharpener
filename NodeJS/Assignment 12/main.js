const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.json());
app.use(express.static('public'));

const homeRoute = require('./routes/home');
const expenseRoute = require('./routes/expenses');

app.use('/expense', expenseRoute);
app.use(homeRoute);


app.listen(3000);
