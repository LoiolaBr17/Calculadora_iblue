const { assert, expect } = require("chai")

const subtracaoControlador = require('../../aplicacao/subtracaoControlador')

const req = {
    params: {
        primeironum: 100,
        segundonum: 80
    }
}

const req2 = {
    params: {
        primeironum: 120,
        segundonum: -20
    }
}

const req3 = {
    params: {
        primeironum: -100,
        segundonum: -2
    }
}

describe('Testando o controlador da subtração:' , function() {
    describe('1 Teste: subtração de dois positivos', function() {
        it("Se espera exito com retorno de 20", function (){
            const resultado = subtracaoControlador(req)
            assert.equal(resultado, 20)
        })
    })

    describe('2 Teste: subtração de um número positivo com negativo', function() {
        it("Se espera exito com retorno de 140", function (){
            const resultado = subtracaoControlador(req2)
            assert.equal(resultado, 140)
        })
    })

    describe('3 Teste: subtração de dois números negativo', function() {
        it("Se espera exito com retorno de -98", function (){
            const resultado = subtracaoControlador(req3)
            assert.equal(resultado, -98)
        })
    })

    describe('4 Teste: passando parâmetros inválidos ', function() {
        it("Se espera um erro: Parametros Inválidos", function (){

            expect(() => subtracaoControlador(10,'@')).to.throw();
        })
    })

    
});