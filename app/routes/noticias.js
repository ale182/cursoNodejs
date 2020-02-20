module.exports = function(application){

    application.get('/noticias' , function(req , res){
        application.app.controllers.noticias.noticias(application,req,res);
    

    });

    // eliminando o arquivo noticia.js
    application.get('/noticia' , function(req , res){
        application.app.controllers.noticias.noticia(application,req,res);
    });
};    

    /* ANTIGO , antes de usar os models
    app.get('/noticias' , function(req , res){

        var connection = app.config.dbConnection();

        connection.query('select * from noticias',function(error,result){
            // apenas demonstra o resultado do select em json    
            //res.send(result);
            res.render("noticias/noticias" , {noticias : result});  
            });
 
        });
        */
    /* ANTIGO - alterando para nao dar o require do dbConnection todas as vezes
    var connection = dbConnection();

    app.get('/noticias' , function(req , res){

        connection.query('select * from noticias',function(error,result){
            // apenas demonstra o resultado do select em json    
            //res.send(result);
            res.render("noticias/noticias" , {noticias : result});  
            });
 
        });
    
    */