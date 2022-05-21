function porcentagem(num){
    resultadoPorcentagem = num / 100

    resultadoporcentagemString = resultadoPorcentagem.toString()
    parteFracionariaporcentagem = resultadoporcentagemString.split('.')[1]
    

    if(parteFracionariaporcentagem !== undefined){
        if(parteFracionariaporcentagem.length > 4){
            return resultadoPorcentagem.toFixed(4)
        }
    }

    return resultadoPorcentagem
}

module.exports = porcentagem