'use strict';

const express = require('express');
const Auth = require('./auth');
const route = express.Router;

route.post('/api/auth/register', Auth.register);

module.exports = route;