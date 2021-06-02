const connect = require('../db/dbConfig');
const mysql = require('mysql');
const jwt = require('jsonwebtoken');
const sha256 = require('sha256');
const ip = require('ip');
const config = require('../config/secret');
const response = require('../res');

const register = (req,res) => {
    var postData = {
        username : req.body.username,
        password : sha256(req.body.password),
        role : req.body.role
    }

    var query = "select username from ?? where ??=?";
    var table = ["user_role","username", postData.username];

    query = mysql.format(query,table);

    connect.query(query, (err,rows,fields) => {
        if(err) {
            console.log(err);
        } else {
            if(rows.length == 0) {
                var query = "insert into ?? set ?";
                var table = ["user_role"];
                query = mysql.format(query,table);
                connect.query(query,postData, (err,rows,fields) => {
                    if(err) {
                        console.log(err);
                    } else {
                        response.ok('success menambahkan user baru',res);
                    }
                })
            } else {
                response.ok('username telah terdaftar',res);
            }
        }
    })
}

const login = (req,res) => {
    var postLogin = {
        username : req.body.username,
        password : req.body.password
    }
    
    var query = "select * from ?? where ??=? and ??=?";
    var table = ["user_role","username",postLogin.username,"password",sha256(postLogin.password),]

    query = mysql.format(query,table);
    connect.query(query, (err,rows) => {
        if(err) {
            console.log(err);
        } else {
            if(rows.length == 1) {
                var token = jwt.sign({rows}, config.secret, {
                    expiresIn: 86400
                });
                id_user_role = rows[0].id_user;
                var data = {
                    id_user_role: id_user_role,
                    access_token: token,
                    ip_address: ip.address()
                }
                var query = "insert into ?? set ?";
                var table = ["table_token"]

                query = mysql.format(query,table);
                connect.query(query,data, (err,rows) => {
                    if(err){
                        console.log(err);
                    } else {
                        response.ok({
                            success: true,
                            message:'Token generate',
                            token:token,
                            currUser:data.id_user_role
                        },res);
                    }
                });
            } else {
                response.fail("username atau password salah",res);
            }
        }
    })
}

const testRole = (req,res) => {
    response.ok("this site only for role 1",res);
}

module.exports = {
    register,
    login,
    testRole
}