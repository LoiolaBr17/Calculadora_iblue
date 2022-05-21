const { assert } = require("chai")

const multiplicacao = require('../../dominio/multiplicacao')

describe('Testando o domínio da multiplicação:' , function() {
    describe('1 Teste: multiplicação de dois positivos', function() {
        it("Se espera exito com retorno de 20", function (){
            const resultado = multiplicacao(10,2)
            assert.equal(resultado, 20)
        })
    })

    describe('2 Teste: multiplicação de um número positivo com negativo ', function() {
        it("Se espera exito com retorno de 20", function (){
            const resultado = multiplicacao(20,-2)
            assert.equal(resultado, -40)
        })
    })

    describe('3 Teste: multiplicação de dois números negativos ', function() {
        it("Se espera exito com retorno de 20", function (){
            const resultado = multiplicacao(-50,-2)
            assert.equal(resultado, 100)
        })
    })

    describe('4 Teste: multiplicação por 0 ', function() {
        it("Se espera exito com retorno de 0", function (){
            const resultado = multiplicacao(44,0)
            assert.equal(resultado, 0)
        })
    })

    
    
});