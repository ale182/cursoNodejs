var mysql = require('mysql') ;

var connMySQL = function(){
    console.log('Conexao BD')
    return mysql.createConnection({
        host     : '192.168.200.110' ,//'vmDEV1' ,
        user     : 'root' ,
        password : '123456',
        database : 'portal_noticias'

    });
};

module.exports = function(){
    console.log('Autoload BD');
    return connMySQL ; 
}

/* ANTIGO , antes de criar variavel para evitar o carregamento desnecessario do BD
module.exports = function () {
    console.log('Conexao BD')
    return mysql.createConnection({
        host     : 'vmDEV1' ,
        user     : 'root' ,
        password : '123456',
        database : 'portal_noticias'

    });
};
*/