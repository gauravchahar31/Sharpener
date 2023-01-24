const database = require('../database/connection');

exports.getAppointments = async (req, res) => {
    const products = await database.execute(`SELECT * FROM Appointments`);
    res.json(products[0]);
}

exports.setAppointment = (req, res) => {
    database.execute(`INSERT INTO Appointments VALUES('${req.body.name}', '${req.body.email}', ${req.body.phone}, '${req.body.date}', '${req.body.time}')`)
                        .then(result => {
                            res.redirect('/');
                        })
                        .catch(err => console.error(err));
}

exports.deleteAppointment = (req, res) => {
    console.log(req.params.email);
    database.execute(`Delete FROM Appointments WHERE email = '${req.params.email}'`)
        .then(result => res.redirect('/'))
        .catch(err => console.error(err));
}