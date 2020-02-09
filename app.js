var express = require('express');

// execucao da funcao contida no express 
var app = express();

//usando metodo GET do express , a partir do /
app.get('/' , function(req , res){
    res.send("<html><body>Portal de Noticias</body></html>");    
});

// tratando a chamada do /tecnologia
app.get('/tecnologia' , function(req , res){
    res.send("<html><body>Noticias de Tecnologia</body></html>");    
});

// escutando requisicoes na porta 3000
                // funcao de callback
app.listen(3000, function(){
    console.log("Servidor rodando com Express");

});