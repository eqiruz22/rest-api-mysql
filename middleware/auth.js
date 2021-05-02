const connect = require('../db/dbConfig');
const mysql = require('mysql');
const jwt = require('jsonwebtoken');
const sha256 = require('sha256');
const ip = require('ip');
const config = require('../config/secret');
const response = require('../res');

const register = (req,res) => {
    const postData = {
        username : req.body.username,
        password : sha256(req.body.password)
    }

    const query = "select username from ?? where ??";
    const table = ["user_role","username", postData.username];

    query = mysql.format(query,table);

    connect.query(query, (err,rows,fields) => {
        if(err) {
            console.log(err);
        } else {
            if(rows.length == 0) {
                const query = "insert into ?? set ?";
                const table = ["user_role"];
                query = mysql.format(query,table);
                connect.query(query,postData, (err,rows,fields) => {
                    if(err) {
                        console.log(err);
                    } else {
                        response.ok('success menambahkan user baru',res);
                    }
                })
            } else {
                response.ok('username telah terdaftar');
            }
        }
    })
}

module.exports = {
    register
}