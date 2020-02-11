var express = require('express');

// execucao da funcao contida no express 
var app = express();

// utilizando o 'engine' de views do ejs
// as views serao os arquivos HTML a engine do ejs vai 
// processar essa requisicao e responder um HTML
app.set('view engine','ejs');


app.get('/' , function(req , res){
    res.render("home/index");    
});

app.get('/formulario_inclusao_noticia' , function(req , res){
    res.render("admin/form_add_noticia");    
});

app.get('/noticias' , function(req , res){
    res.render("noticias/noticias");    
});

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

});