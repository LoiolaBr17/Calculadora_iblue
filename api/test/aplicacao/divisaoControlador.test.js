const { assert,expect  } = require("chai")

const divisaoControlador = require("../../aplicacao/divisaoControlador")

const req = {
    params: {
        primeironum: 10,
        segundonum: 2
    }
}

const req2 = {
    params: {
        primeironum: -20,
        segundonum: 2
    }
}

const req3 = {
    params: {
        primeironum: -50,
        segundonum: -2
    }
}

const req4 = {
    params: {
        primeironum: 10,
        segundonum: 3
    }
}

describe('Testando o controlador da divisão:' , function() {
    describe('1 Teste: divisão de dois positivos', function() {
        it("Se espera exito com retorno de 5", function (){
            const resultado = divisaoControlador(req)
            assert.equal(resultado, 5)
        })
    })

    describe('2 Teste: divisão de um número positivo com negativo', function() {
        it("Se espera exito com retorno de -10", function (){
            const resultado = divisaoControlador(req2)
            assert.equal(resultado, -10)
        })
    })

    describe('3 Teste: divisão de dois números negativo', function() {
        it("Se espera exito com retorno de 25", function (){
            const resultado = divisaoControlador(req3)
            assert.equal(resultado, 25)
        })
    })

    describe('4 Teste: divisão de dois números positivos com retorno em ponto flutuante', function() {
        it("Se espera exito com retorno de 3.3333", function (){
            const resultado = divisaoControlador(req4)
            assert.equal(resultado, 3.3333)
        })
    })

    describe('5 Teste: divisão por 0', function() {
        it("Se espera um erro: Não é possível dividir por 0", function (){
            expect(() => divisaoControlador(100,0)).to.throw();
        })
    })

    describe('6 Teste: passando parâmetros inválidos ', function() {
        it("Se espera um erro: Parametros Inválidos", function (){
            expect(() => divisaoControlador(10,'@')).to.throw();
        })
    })
    
});