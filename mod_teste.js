// exemplo de criacao de modulo para uso na aplicacao
// Primeira forma de fazer (sem funcao)
/*
var msg = "Teste módulo" ;

module.exports = msg ;
*/

// usando exports e uma funcao que retorna valor
module.exports = function(){
    var msg = "Teste módulo" ;
    return msg ;
}