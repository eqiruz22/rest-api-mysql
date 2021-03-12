const mysql = require('mysql');

const conn = mysql.createConnection({
    host: 'localhost',
    password: 'user.100',
    user: 'ist',
    database: 'asset'
});

conn.connect((err, resolve) => {
    if (resolve) {
        console.log('Connection to database success');
    }
    throw err;
});

module.exports = conn;