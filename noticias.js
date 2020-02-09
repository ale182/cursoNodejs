// require incorpora outros arquivos no arquivo atual, tipo 'include'
// pode importar modulo, biblioteca, outras paginas...
var http = require('http');

// criando um 'servidor' para responder requisicao HTTP

var server = http.createServer( function(req,res){
// dentro do servidor

// retorna um codigo html
res.end("<html><body>Portal de Noticias</body></html>");

});

// fica 'escutando' a porta 3000
server.listen(3000);

console.log('teste');