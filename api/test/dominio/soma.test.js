const { assert } = require("chai")

const soma = require('../../dominio/soma')

describe('Testando o domínio da soma' , function() {
    describe('1 Teste: soma de dois positivos', function() {
        it("Se espera exito com retorno de 4", function (){
            const resultado = soma(2,2)
            assert.equal(resultado, 4)
        })
    })

    describe('2 Teste: soma de positivo com negativo', function() {
        it("Se espera exito com retorno de -3", function (){
            const y = soma(2,-5)
            assert.equal(y, -3)
        })
    })

    describe('3 Teste: soma de negativo com negativo', function() {
        it("Se espera exito com retorno de -25", function (){
            const y = soma(-20,-5)
            assert.equal(y, -25)
        })
    })

    describe('4 Teste: soma de numero com string', function() {
        it("Se espera uma concatenação com retorno de  9@", function (){
            const y = soma(9,'@')
            assert.equal(y,'9@')
        })
    })

});