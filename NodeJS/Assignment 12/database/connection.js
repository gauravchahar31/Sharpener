const sql = require('mysql2');

const pool = sql.createPool({
    host: 'localhost',
    user: 'root',
    database: 'test',
    password: 'password'
});

module.exports = pool.promise();