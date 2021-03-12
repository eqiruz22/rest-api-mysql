'use strict';

var response = require('../res');
var connection = require('../db/dbConfig');

exports.index = function (req, res) {
    response.ok('rest api berjalan lancar');
};