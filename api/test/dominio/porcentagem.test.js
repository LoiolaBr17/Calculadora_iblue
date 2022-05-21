const { assert } = require("chai")

const porcentagem = require('../../dominio/porcentagem')

describe('Testando o domínio da porcentagem:' , function() {
    describe('1 Teste: porcentagem de um inteiro', function() {
        it("Se espera exito com retorno de 1", function (){
            const resultado = porcentagem(100)
            assert.equal(resultado, 1)
        })
    })

    describe('2 Teste: porcentagem de um número ponto flutuante', function() {
        it("Se espera exito com retorno de 0,805", function (){
            const resultado = porcentagem(80.5)
            assert.equal(resultado, 0.805)
        })
    })
 
});