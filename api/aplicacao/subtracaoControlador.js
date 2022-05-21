const converterStringParaNumero = require('../utilitarios/converterStringParaNumero')
const subtracao = require('../dominio/subtracao')

function subtracaoControlador(req){

    const primeiroNumero = converterStringParaNumero(req.params.primeironum)
    const segundoNumero = converterStringParaNumero(req.params.segundonum)

    if(!primeiroNumero && primeiroNumero !== 0 || !segundoNumero && segundoNumero !== 0){
        throw new Error('Parametros Inválidos')
    }

    const resultadoDaSubtracao = subtracao(primeiroNumero, segundoNumero)

    return resultadoDaSubtracao
}

module.exports = subtracaoControlador