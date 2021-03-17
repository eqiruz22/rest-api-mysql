'use strict';

// module.exports = function (app) {
//     var myjson = require('../controllers/AssetController');

//     app.route('/')
//         .get(myjson.index);
// }
const express = require('express');
const AssetController = require('../controllers/AssetController');
const route = express.Router();

route.get('/', AssetController.index);
route.get('/list', AssetController.fetchAll);
route.get('/list/:id', AssetController.fetchById);
route.post('/add-data', AssetController.addData);

module.exports = route;