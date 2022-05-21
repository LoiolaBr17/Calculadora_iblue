const converterStringParaNumero = require('../utilitarios/converterStringParaNumero')
const multiplicacao = require('../dominio/multiplicacao')

function multiplicacaoControlador(req){
    const primeiroNumero = converterStringParaNumero(req.params.primeironum)
    const segundoNumero = converterStringParaNumero(req.params.segundonum)

    if(!primeiroNumero && primeiroNumero !== 0 || !segundoNumero && segundoNumero !== 0){
        throw new Error('Parametros Inválidos')
    }

    const resultadoDaMultiplicacao = multiplicacao(primeiroNumero, segundoNumero)

    return resultadoDaMultiplicacao
}

module.exports = multiplicacaoControlador