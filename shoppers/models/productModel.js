var database = require('../database/db');
var config = require('../config/config');

exports.loadProduct = (id) => {
    var sql = `select * from product where id = '${id}'`;
    return database.load(sql);
}

exports.loadAll = (offset) => {
    var sql = `select * from product limit ${config.PRODUCTS_PER_PAGE} offset ${offset}`;
    return database.load(sql);
}

exports.countTotal = () => {
	var sql = `select count(*) as total from product`;
    return database.load(sql);
}