const { assert, expect } = require("chai")

const raizquadradaControlador = require('../../aplicacao/raizquadradaControlador')

const req = {
    params: {
        primeironum: 121
    }
}

const req2 = {
    params: {
        primeironum: 10
    }
}

describe('Testando o controlador da raiz quadrada:' , function() {
    describe('1 Teste: raiz quadrada inteira', function() {
        it("Se espera exito com retorno de 11", function (){
            const resultado = raizquadradaControlador(req)
            assert.equal(resultado, 11)
        })
    })

    describe('2 Teste: raiz quadrada ponto flutuante', function() {
        it("Se espera exito com retorno de 3.1623", function (){
            const resultado = raizquadradaControlador(req2)
            assert.equal(resultado, 3.1623)
        })
    })

    describe('3 Teste: passando parâmetros inválidos ', function() {
        it("Se espera um erro: Parametros Inválidos", function (){
            expect(() => raizquadradaControlador('?')).to.throw();
        })
    })

    describe('4 Teste: passando número negativo ', function() {
        it("Se espera um erro: Não possui raiz", function (){
            expect(() => raizquadradaControlador(-121)).to.throw();
        })
    })

    
});