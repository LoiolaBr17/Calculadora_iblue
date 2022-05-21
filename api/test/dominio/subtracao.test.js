const { assert } = require("chai")

const subtracao = require('../../dominio/subtracao')


describe('Testando o domínio da subtração' , function() {
    describe('1 Teste: subtração de dois positivos', function() {
        it("Se espera exito com retorno de 8", function (){
            const resultado = subtracao(16,8)
            assert.equal(resultado, 8)
        })
    })

    describe('2 Teste: subtração de positivo com negativo', function() {
        it("Se espera exito com retorno de 24", function (){
            const resultado = subtracao(16,-8)
            assert.equal(resultado, 24)
        })
    })

    describe('3 Teste: subtração de dois negativos', function() {
        it("Se espera exito com retorno de 0", function (){
            const resultado = subtracao(-8,-8)
            assert.equal(resultado, 0)
        })
    })

});