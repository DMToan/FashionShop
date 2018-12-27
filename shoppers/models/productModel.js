var database = require('../database/db');

exports.loadProduct = (id) => {
    var sql = `select * from product where id = '${id}'`;
    return database.load(sql);
}