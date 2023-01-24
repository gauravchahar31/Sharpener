const express = require('express');
const router = express.Router();

const bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({extended: true}));

const appointmentController = require('../controllers/appointments');

router.get('/get', appointmentController.getAppointments);
router.post('/add', appointmentController.setAppointment);
router.get('/delete/:email', appointmentController.deleteAppointment);

module.exports = router;