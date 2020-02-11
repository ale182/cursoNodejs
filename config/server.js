var express = require('express');

// carregando o modulo 'customizado' de testes
// TESTES de modulo
// var msg = require('./mod_teste') ;

// execucao da funcao contida no express 
var app = express();

// utilizando o 'engine' de views do ejs
// as views serao os arquivos HTML a engine do ejs vai 
// processar essa requisicao e responder um HTML
app.set('view engine','ejs');

module.exports = app;