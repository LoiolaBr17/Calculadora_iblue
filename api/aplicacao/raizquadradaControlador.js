const converterStringParaNumero = require('../utilitarios/converterStringParaNumero')
const raizQuadrada = require('../dominio/raizquadrada')

function raizquadradaControlador(req){
    const numero = converterStringParaNumero(req.params.primeironum)

    if(!numero && numero !== 0){
        throw new Error('Parametros Inválidos')
    }

    try{
        const resultadoDaRaizQuadrada = raizQuadrada(numero)
        return resultadoDaRaizQuadrada
    }catch(err){
        throw new Error(err)
    }

    
}

module.exports = raizquadradaControlador