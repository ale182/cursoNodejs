// classe Noticias
function NoticiasDAO(connection){
    // variavel com _ indica q é interna da classe
    this._connection = connection ; 

}

// criando funcoes da Classe
NoticiasDAO.prototype.getNoticias = function(callback){
    this._connection.query('select * from noticias',callback);
};

NoticiasDAO.prototype.getNoticiaId = function( callback){
    this._connection.query('select * from noticias where id_noticia = 3',callback);
};

NoticiasDAO.prototype.salvarNoticia = function(noticia,callback){
    this._connection.query("insert into noticias set ? ",noticia,callback)
};

module.exports = function(){
    return NoticiasDAO;
}


/* ANTIGO, antes de mudar para CLASSE 
module.exports = function(){

    // criando uma funcao dentro do contexto do modulo
    // e exporta uma funcao que permite acessar uma funcao dentro dela
    this.getNoticias = function(connection, callback){
            connection.query('select * from noticias',callback);

    };

    this.getNoticiaId = function(connection, callback){
        connection.query('select * from noticias where id_noticia = 3',callback);

    };

    this.salvarNoticia = function(noticia,connection,callback){
        connection.query("insert into noticias set ? ",noticia,callback)

    };

    return this;
}
*/