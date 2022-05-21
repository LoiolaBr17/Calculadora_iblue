const converterStringParaNumero = require('../utilitarios/converterStringParaNumero')
const porcentagem = require('../dominio/porcentagem')

function porcentagemControlador(req){
    const numero = converterStringParaNumero(req.params.primeironum)

    if(!numero && numero !== 0){
        throw new Error('Parametros Inválidos')
    }

    const resultadoPorcentagem = porcentagem(numero)

    return resultadoPorcentagem
}

module.exports = porcentagemControlador