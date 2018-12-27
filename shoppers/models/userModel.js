var database = require('../database/db');

exports.login = (info) => {
    var sql = `select * from user where username = '${info.user}' and password = '${info.pass}'`;
    return database.load(sql);
}