module.exports = function(application){
    application.get('/formulario_inclusao_noticia' , function(req , res){
        res.render("admin/form_add_noticia");    
    });

    application.post('/noticias/salvar' , function(req , res){
        var noticia = req.body ;

        console.log(noticia);
        //tratando dados com o Express Validator

        req.assert('titulo','Titulo obrigatório').notEmpty();
        req.assert('resumo','Resumo obrigatório').notEmpty();
        req.assert('resumo','Resumo deve ser >10 e <100').len(10,100);
        req.assert('autor','Autor obrigatório').notEmpty();
        req.assert('noticia','Noticia obrigatória').notEmpty();

        // **** com ERRO ****
        req.assert('data_noticia','Data invalida').notEmpty().isDate({format : 'YYYY-MM-DD'});


        var erros = req.validationErrors();

        if (erros){
            res.render("admin/form_add_noticia");    
            // se ocorreu algum erro, da o return vazio para nao continuar o processo
            return;
        }

        var connection = application.config.dbConnection();
        var noticiasModel = new application.app.models.NoticiasDAO(connection) ;

        noticiasModel.salvarNoticia(noticia , function(error,result){
            // redireciona para outra pagina
            res.redirect('/noticias');

        });
    });
};