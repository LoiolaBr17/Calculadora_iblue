const converterStringParaNumero = require('../utilitarios/converterStringParaNumero')
const divisao = require('../dominio/divisao')

function divisaoControlador(req){
    const primeiroNumero = converterStringParaNumero(req.params.primeironum)
    const segundoNumero = converterStringParaNumero(req.params.segundonum)

    if(!primeiroNumero && primeiroNumero !== 0 || !segundoNumero && segundoNumero !== 0){
        throw new Error('Parametros Inválidos')
    }

    try {
        const resultadoDaDivisao = divisao(primeiroNumero, segundoNumero)
        return resultadoDaDivisao
    }catch(e){
        throw new Error(e.message)
    }      

} 

module.exports = divisaoControlador