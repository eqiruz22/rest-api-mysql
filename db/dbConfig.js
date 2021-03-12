const mysql = require('mysql');

const conn = mysql.createConnection({
    host: 'localhost',
    password: 'user.100',
    user: 'ist',
    database: 'asset'
});

conn.connect((err) => {
    if (err) throw err;
    console.log('Connection success');
});

module.exports = conn;