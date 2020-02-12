var mysql = require('mysql') ;

module.exports = function () {
    return mysql.createConnection({
        host     : 'vmDEV1' ,
        user     : 'root' ,
        password : '123456',
        database : 'portal_noticias'

    });
};