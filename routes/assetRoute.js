'use strict';

const express = require('express');
const AssetController = require('../controllers/AssetController');
const MiddlewareAuth = require('../middleware/auth');
const route = express.Router();

route.post('/api/auth/registration', MiddlewareAuth.register);
route.get('/api/', AssetController.index);
route.get('/api/list', AssetController.fetchAll);
route.get('/api/list/:id', AssetController.fetchById);
route.post('/api/add-data', AssetController.addData);
route.put('/api/update-data', AssetController.updateData);
route.get('/api/group-data', AssetController.groupData);
route.delete('/api/delete-data/:id', AssetController.deleteData);

module.exports = route;