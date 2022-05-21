const { assert, expect } = require("chai")

const raizQuadrada = require('../../dominio/raizquadrada')

describe('Testando o domínio da raiz quadrada:' , function() {
    describe('1 Teste: raiz quadrada com raiz inteira', function() {
        it("Se espera exito com retorno de 9", function (){
            const resultado = raizQuadrada(81)
            assert.equal(resultado, 9)
        })
    })

    describe('2 Teste: raiz quadrada com raiz ponto flutuante', function() {
        it("Se espera exito com retorno de 3.1623", function (){
            const resultado = raizQuadrada(10)
            assert.equal(resultado, 3.1623)
        })
    })

    describe('3 Teste: passando número negativo ', function() {
        it("Se espera um erro: Não possui raiz", function (){
            expect(() => raizquadradaControlador(-81)).to.throw();
        })
    })
 
});