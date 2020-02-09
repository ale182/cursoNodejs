// require incorpora outros arquivos no arquivo atual, tipo 'include'
// pode importar modulo, biblioteca, outras paginas...
var http = require('http');

// criando um 'servidor' para responder requisicao HTTP

var server = http.createServer( function(req,res){
// dentro do servidor

// retorna um codigo html
// res.end("<html><body>Portal de Noticias</body></html>");

// lendo a URL passada e retornando HTML de acordo com o endereco
var categoria = req.url ;

if (categoria == '/tecnologia'){
    res.end("<html><body>Noticias de Tecnologia</body></html>");    

} else if (categoria == '/moda'){
    res.end("<html><body>Noticias de Moda</body></html>");

} else if (categoria == '/beleza'){
    res.end("<html><body>Noticias de Beleza</body></html>");

} else {
    res.end("<html><body>Portal de Noticias</body></html>");

}


});

// fica 'escutando' a porta 3000
server.listen(3000);

console.log('teste');