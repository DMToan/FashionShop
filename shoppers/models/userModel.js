var database = require('../database/db');

exports.login = (info) => {
    var sql = `select * from user where username = '${info.user}' and password = '${info.pass}'`;
    return database.load(sql);
}

exports.loadAll = () => {
    var sql = `select id, username, email, phone, type from user`;
    return database.load(sql);
}