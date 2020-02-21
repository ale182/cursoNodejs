module.exports.noticias = function(application,req,res){

    var connection = application.config.dbConnection();
        // acessa o modulo 
        //var noticiasModel = application.app.models.noticiasModel ;
        // após mudar para Classe , usando o NEW para criar uma instancia do modulo/objeto
        var noticiasModel = new application.app.models.NoticiasDAO(connection) ;

        noticiasModel.getNoticias(function(error,result){
            res.render("noticias/noticias" , {noticias : result});  

        });

}


module.exports.noticia = function(application,req,res){

    var connection = application.config.dbConnection();
    var noticiasModel = new application.app.models.NoticiasDAO(connection);
    var id_noticia = req.query ; 

    noticiasModel.getNoticiaId (id_noticia , function( error,result){
        res.render("noticias/noticia" , {noticia : result});  

    });
};

