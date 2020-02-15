var express = require('express');
var consign = require('consign');




// carregando o modulo 'customizado' de testes
// TESTES de modulo
// var msg = require('./mod_teste') ;

// execucao da funcao contida no express 
var app = express();

// utilizando o 'engine' de views do ejs
// as views serao os arquivos HTML a engine do ejs vai 
// processar essa requisicao e responder um HTML
app.set('view engine','ejs');

// setar o caminho de views padrao
app.set('views','./app/views');

// inclui o diretorio das views para carregar automaticamente e fazer
// os 'requires' de forma automatica
                         // inclui dentro do 'servidor'
consign().include('app/routes').into(app);


module.exports = app;