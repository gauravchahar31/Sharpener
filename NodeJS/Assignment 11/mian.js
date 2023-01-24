const express = require('express')
const app = express();

const bodyParser = require('body-parser');
const homeRoutes = require('./routes/home');
const appointmentRoutes = require('./routes/appointments');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.json());
app.use(express.static('public'));

app.use('/appointments', appointmentRoutes);
app.use(homeRoutes);

app.listen(3000);