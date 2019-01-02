var database = require('../database/db');
var config = require('../config/config');

exports.loadProduct = (id) => {
    var sql = `select * from product where id = '${id}'`;
    return database.load(sql);
}

exports.loadAll = () => {
    var sql = `select * from product`;
    return database.load(sql);
}

exports.loadAllOffset = (offset) => {
    var sql = `select * from product limit ${config.PRODUCTS_PER_PAGE} offset ${offset}`;
    return database.load(sql);
}

exports.countTotal = () => {
	var sql = `select count(*) as total from product`;
    return database.load(sql);
}

exports.loadBestSeller = () => {
	var sql = `select * from product ORDER BY total_bought DESC limit 5`;
    return database.load(sql);
}

exports.loadSameBrand = (thisProduct) => {
	var sql = `SELECT * FROM product WHERE brand_id = '${thisProduct.brand_id}' AND id != '${thisProduct.id}' ORDER BY total_bought DESC limit 5`;
    return database.load(sql);
}