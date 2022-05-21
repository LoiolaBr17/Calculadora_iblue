function converterStringParaNumero(string){
    const numero = Number(string)
   
    if(typeof numero !== 'number'){
        return 'NaN'
    }

    return numero
}

module.exports = converterStringParaNumero