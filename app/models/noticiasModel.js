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