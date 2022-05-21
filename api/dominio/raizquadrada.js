function raizQuadrada(num){
    const resultadoDaRaizQuadrada = Math.sqrt(num)

    if(resultadoDaRaizQuadrada === null){
        throw new Error('Não possui raiz')
    }

    resultadoRaizQuadradaString = resultadoDaRaizQuadrada.toString()
    parteFracionariaRaizQuadrada = resultadoRaizQuadradaString.split('.')[1]
    

    if(resultadoRaizQuadradaString !== undefined){
        if(resultadoRaizQuadradaString.length > 4){
            return resultadoDaRaizQuadrada.toFixed(4)
        }
    }

    return resultadoDaRaizQuadrada
}

module.exports = raizQuadrada