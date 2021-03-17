'use strict';

const response = require('../res');
const connection = require('../db/dbConfig');

const index = (req, res) => {
    response.ok('rest api berjalan lancar', res);
};

const fetchAll = (req, res) => {
    connection.query('select * from asset', (error, rows, fields) => {
        if (error) {
            throw error;
        } else {
            response.ok(rows, res);
        }
    })
}

module.exports = {
    index,
    fetchAll
}