var express = require('express');
var consign = require('consign');
var bodyParser = require('body-parser');



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

//implementando o bodyparser , { implementa atraves de json as urls codificadas }
app.use(bodyParser.urlencoded({extended:true}));

// inclui o diretorio das views para carregar automaticamente e fazer
// os 'requires' de forma automatica
consign()
    .include('app/routes') // inclui as rotas dentro do 'servidor'
    .then('config/dbConnection.js') // inclui o carregamento do dbConnection ao carregar as rotas
    .then('app/models') //inclusao de todos os models (tabelas) criados no autoload da aplicacao
    .into(app);


module.exports = app;