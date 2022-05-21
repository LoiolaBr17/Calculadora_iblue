const { assert } = require("chai")

const converterStringParaNumero = require('../../utilitarios/converterStringParaNumero')

describe('Testando o utilitario de converção de texto para número:' , function() {
    describe('1 Teste: passando uma string de um número positivo', function() {
        it("Se espera exito com retorno de 2", function (){
            const resultado = converterStringParaNumero('2')
            assert.equal(resultado, 2)
        })
    })

    describe('2 Teste:  passando uma string de um número negativo', function() {
        it("Se espera exito com retorno de -5", function (){
            const resultado = converterStringParaNumero('-5')
            assert.equal(resultado, -5)
        })
    })
     
});