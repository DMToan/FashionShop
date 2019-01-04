var database = require('../database/db');

exports.login = (info) => {
    var sql = `select * from user where username = '${info.user}' and password = '${info.pass}'`;
    return database.load(sql);
}

exports.load = (name) => {
    var sql = `select * from user where username = '${name}'`;
    return database.load(sql);
}

exports.loadAll = () => {
    var sql = `select id, username, email, phone, type from user`;
    return database.load(sql);
}

exports.updateInfo = (user) => {
    var sql = `UPDATE user set password = '${user.password}', phone = '${user.phone}', email = '${user.email}' WHERE id = '${user.id}'`
    return database.save(sql);
}