'use strict';

const express = require('express');
const AssetController = require('../controllers/AssetController');
const route = express.Router();

route.get('/api/', AssetController.index);
route.get('/api/list', AssetController.fetchAll);
route.get('/api/list/:id', AssetController.fetchById);
route.post('/api/add-data', AssetController.addData);
route.put('/api/update-data', AssetController.updateData);
route.get('/api/group-data', AssetController.groupData);
route.delete('/api/delete-data/:id', AssetController.deleteData);

module.exports = route;