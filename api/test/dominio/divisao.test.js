const { assert,expect } = require("chai")

const divisao = require('../../dominio/divisao')

describe('Testando o domínio da divisão:' , function() {
    describe('1 Teste: divisão de dois positivos', function() {
        it("Se espera exito com retorno de 2", function (){
            const resultado = divisao(4,2)
            assert.equal(resultado, 2)
        })
    })

    describe('2 Teste: divisão de positivo com negativo', function() {
        it("Se espera exito com retorno de -5", function (){
            const resultado = divisao(10,-2)
            assert.equal(resultado, -5)
        })
    })

    describe('3 Teste: divisão de negativo com negativo', function() {
        it("Se espera exito com retorno de 10", function (){
            const resultado = divisao(-20,-2)
            assert.equal(resultado, 10)
        })
    })

    describe('4 Teste: divisão de dois números positivos com retorno em ponto flutuante ', function() {
        it("Se espera exito com retorno de 3.3333", function (){
            const resultado = divisao(10,3)
            assert.equal(resultado, 3.3333)
        })
    })

    describe('5 Teste: divisão por 0', function() {
        it("Se espera um erro: Não é possível dividir por 0", function (){
            expect(() => divisao(20,0)).to.throw();
        })
    }) 
});