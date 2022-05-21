function divisao(numeroUm, numeroDois){

    if(numeroDois === 0){
        throw new Error('Não é possível dividir por 0')
    }

    resultadoDivisao = (numeroUm) / (numeroDois)

    resultadoDivisaoString = resultadoDivisao.toString()
    parteFracionariaDivisao = resultadoDivisaoString.split('.')[1]
    

    if(parteFracionariaDivisao !== undefined){
        if(parteFracionariaDivisao.length > 4){
            return resultadoDivisao.toFixed(4)
        }
    }

    return resultadoDivisao
}

module.exports = divisao