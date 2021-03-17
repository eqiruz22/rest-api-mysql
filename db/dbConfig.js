const mysql = require('mysql');

const conn = mysql.createConnection({
    host: 'localhost',
    password: '',
    user: 'root',
    database: 'data_asset'
});

conn.connect((err) => {
    if (err) throw err;
    console.log('Connection success');
});

module.exports = conn;