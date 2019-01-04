var database = require('../database/db');

exports.add = (userID) => {
    var sql = `insert into bill_list(customer_id, add_day) values('${userID}', DATE(NOW()))`;
    return database.save(sql);
}

exports.findLastest = () => {
    var sql = `SELECT * FROM bill_list ORDER BY id DESC LIMIT 1`;
    return database.save(sql);
}

exports.addDetail = (id, item) => {
    var sql = `insert into bill_detail(bill_id, product_id, quantity) values('${id}', '${item.id}', '${item.quantity}')`
    return database.save(sql);
}

exports.loadAll = () => {
    var sql = `SELECT * FROM bill_list`
    return database.load(sql);
}

exports.loadAllByUser = (id) => {
    var sql = `SELECT * FROM bill_list WHERE customer_id = '${id}'`
    return database.load(sql);
}

exports.loadDetail = (id) => {
    var sql = `SELECT * FROM bill_detail JOIN product ON bill_detail.product_id = product.id WHERE bill_detail.bill_id = '${id}'`
    return database.load(sql);
}