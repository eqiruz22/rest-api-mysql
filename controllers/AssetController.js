'use strict';

const response = require('../res');
const connection = require('../db/dbConfig');

const index = (req, res) => {
    response.ok('rest api berjalan lancar');
};

module.exports = {
    index
}