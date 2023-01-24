const sql = require('mysql2');

const pool = sql.createPool({
    host: 'localhost',
    user: 'root',
    database: 'appointment',
    password: 'password'
});

module.exports = pool.promise();