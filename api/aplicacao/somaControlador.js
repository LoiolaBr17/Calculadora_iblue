const converterStringParaNumero = require('../utilitarios/converterStringParaNumero')
const soma = require('../dominio/soma')

function somaControlador(req){
    
    const primeiroNumero = converterStringParaNumero(req.params.primeironum)
    const segundoNumero = converterStringParaNumero(req.params.segundonum)

    if(!primeiroNumero && primeiroNumero !== 0 || !segundoNumero && segundoNumero !== 0){
        throw new Error('Parametros Inválidos')
    }
    
    const resultadoDaSoma = soma(primeiroNumero,segundoNumero)

    return resultadoDaSoma
}

module.exports = somaControlador