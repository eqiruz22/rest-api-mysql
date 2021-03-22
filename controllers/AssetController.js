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

const fetchById = (req, res) => {
    let id = req.params.id;
    connection.query('select * from asset where id = ?', [id],
        (error, rows, fields) => {
            if (error) {
                throw error;
            } else {
                response.ok(rows, res);
            }
        }
    )
}

const addData = (req, res) => {
    const merk = req.body.merk;
    const sn = req.body.serial_number;
    const type = req.body.type;
    const tag = req.body.tag;
    const status = req.body.status;
    const spesifikasi = req.body.spesifikasi;
    const tanggal = req.body.tanggal;
    connection.query('insert into asset (merk,serial_number,type,tag,status,spesifikasi,tanggal) values (?,?,?,?,?,?,?)',
        [merk, sn, type, tag, status, spesifikasi, tanggal],
        (error, rows, fields) => {
            if (error) {
                throw error;
            } else {
                response.ok("Data berhasil ditambahkan", res);
            }
        }
    )
}

const updateData = (req, res) => {
    let id = req.params.id;
    const merk = req.body.merk;
    const sn = req.body.serial_number;
    const type = req.body.type;
    const tag = req.body.tag;
    const status = req.body.status;
    const spesifikasi = req.body.spesifikasi;
    const tanggal = req.body.tanggal;

    connection.query('update asset set id=?, merk=?, sn=?, type=?, tag=?, status=?, spesifikasi=?, tanggal=?',
        [merk, sn, type, tag, status, spesifikasi, tanggal], (error, rows, fields) => {
            if (error) {
                throw error;
            } else {
                response.ok('success update data', res);
            }
        })
}

module.exports = {
    index,
    fetchAll,
    fetchById,
    addData,
    updateData
}