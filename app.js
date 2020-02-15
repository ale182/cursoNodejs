// incluindo arquivo de configuracao, contendo os modulos e logicas necessarias
var app = require('./config/server') ;

// criando a variavel e chamando depois (passando o app como parametro)
// var rotaHome = require('./app/routes/home') ;
// rotaHome(app) ; 

/* ANTIGO, antes de usar CONSIGN 

// outra forma, criando a variavel e ja executando a funcao na criacao
var rotaHome = require('./app/routes/home')(app) ; 
var rotaNoticias = require('./app/routes/noticias')(app) ; 
var rotaFormInclusao = require('./app/routes/formulario_inclusao_noticia') (app) ; 

// ** ANTIGO , antes de configurar como Rotas
/*
app.get('/' , function(req , res){
    res.render("home/index");    
});

app.get('/formulario_inclusao_noticia' , function(req , res){
    res.render("admin/form_add_noticia");    
});

app.get('/noticias' , function(req , res){
    res.render("noticias/noticias");    
});

*/



// ** ANTIGO -- ANTES de baixar views.zip 
/*

// usando o EJS para trazer o HTML da pagina
app.get('/tecnologia' , function(req , res){
    res.render("secao/tecnologia");    
});


//usando metodo GET do express , a partir do /
app.get('/' , function(req , res){
    res.send("<html><body>Portal de Noticias</body></html>");    
});
*/

// tratando a chamada do /tecnologia
// ** ANTIGO , antes de usar o EJS 
/* app.get('/tecnologia' , function(req , res){
    res.send("<html><body>Noticias de Tecnologia</body></html>");    
});
*/
// escutando requisicoes na porta 3000
                // funcao de callback
app.listen(3000, function(){
    console.log("Servidor rodando com Express");

    // Primeira forma de fazer (sem funcao)
    // console.log(msg);

    // usando exports e uma funcao que retorna valor
    //console.log(msg());

});