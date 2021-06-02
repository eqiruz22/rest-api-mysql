'use strict'

const jwt = require('jsonwebtoken');
const config = require('../config/secret');

function verification () {
    return function(req,res,next){
        let role = req.body.role;
        let tokenWithBearer = req.headers.authorization;
        if(tokenWithBearer){
            var token = tokenWithBearer.split(' ')[1];
            jwt.verify(token,config.secret, function(err,rows){
                if(err){
                    return res.status(401).send({auth:false,message:'invalid token'});
                } else {
                    if(role == 1){
                        req.auth = rows;
                        next();
                    } else {
                        return res.status(401).send({auth:false,message:'failed authorization role'});
                    }
                }
            });
        } else {
            return res.status(401).send({auth:false,message:'token is not available'});
        }
    }
}

module.exports = {
    verification
}