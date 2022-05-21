<template>
   <div class="container">
        <div class="calculator">
          <input id="user_input" placeholder="0" disabled :value="resultado">
          <input id="user_input2" placeholder="0" disabled :value="tela">
          <br>
          <button class="btn" @click="mudarSinal()">+/-</button>
          <button class="btn" @click="limparTudo()">CE</button>
          <button class="btn" @click="limparTela()" >C</button>
          <button class="btn" @click="adicionarRaizQuadrada()">√</button>
          <br>
          <button class="btn" @click="adicionarNumero(7)">7</button>
          <button class="btn" @click="adicionarNumero(8)">8</button>
          <button class="btn" @click="adicionarNumero(9)">9</button>
          <button class="btn" @click="adicionarOperador('+')">+</button>
          <br>
          <button class="btn" @click="adicionarNumero(4)">4</button>
          <button class="btn" @click="adicionarNumero(5)">5</button>
          <button class="btn" @click="adicionarNumero(6)">6</button>
          <button class="btn" @click="adicionarOperador('-')">-</button>
          <br>
          <button class="btn" @click="adicionarNumero(1)">1</button>
          <button class="btn" @click="adicionarNumero(2)">2</button>
          <button class="btn" @click="adicionarNumero(3)">3</button>
          <button class="btn" @click="adicionarOperador('*')">*</button>
          <br>
          <button class="btn" @click="adicionarPonto()">.</button>
          <button class="btn" @click="adicionarNumero(0)">0</button>
          <button class="btn" @click="adicionarPorcentagem()">%</button>
          <button class="btn" @click="adicionarOperador('/')">/</button>
          <br>
          <button class="btnEqual" @click="calcular()">=</button>
        </div>
    </div>
    
</template>

<script>
export default {
  name: 'CalculadoraComponent',
  data(){
    return {
      tela: '',
      resultado: '',
      primeiroNumero: '',
      segundoNumero: '',
      operador: '',
      calculo: '',
      operacaoExibida: false,
      operadores: {
        '+': 'soma',
        '-':'subtracao',
        '*': 'multiplicacao',
        '/': 'divisao',
        '%': 'porcentagem',
        '√': 'raizquadrada'
      },
      calculadora: false,
      teoria: false
    }
  },
  methods:{
    atualizarTela(){
      if(this.operador !== '' && this.primeiroNumero !== '' && this.calculo === ''){
        this.resultado = this.primeiroNumero + this.operador
        return
      }

      if(this.operador !== '' && this.primeiroNumero === '' && this.calculo === ''){
        this.resultado = '0' + this.operador
        return
      }

      if(this.operador !== '' && this.calculo !== ''){
        this.resultado = this.calculo + this.operador
        return
      }
    },

    adicionarNumero(num){
      if(this.operador === ''){
        this.tela = this.tela + num
        this.primeiroNumero = this.primeiroNumero + num
      }

      if(this.operador !== ''){
        this.tela = this.tela + num
        this.segundoNumero = this.segundoNumero + num
      }
      
    },

    limparTela(){
      this.tela = ''
      
      if(this.operador === ''){
        this.primeiroNumero = ''
      }else{
        this.segundoNumero = ''
      }
    },

    limparTudo(){
      this.tela = ''
      this.resultado = ''
      this.primeiroNumero = ''
      this.segundoNumero = ''
      this.operador = ''
      this.calculo = ''
    },

    adicionarPonto(){
      if(this.operador === '' && this.tela === ''){
        this.tela = '0.'
        this.primeiroNumero = '0.'
        return
      }

      if(this.operador !== '' && this.tela === ''){
        this.tela = '0.'
        this.segundoNumero = '0.'
        return
      }

      
      if(this.tela.indexOf('.') > 0){
        return
      }
      
      if(this.operador === ''){
        this.tela = this.tela + '.'
        this.primeiroNumero = this.primeiroNumero + '.'
      }else{
        this.tela = this.tela + '.'
        this.segundoNumero = this.segundoNumero + '.'
      }
    },

    mudarSinal(){
      if(this.tela === ''){
        return
      }

      if(this.operador === ''){
        if(this.tela[0] === '-'){
          this.primeiroNumero = this.primeiroNumero.substring(1,this.primeiroNumero.length)
          this.tela = this.tela.substring(1,this.tela.length)
          return
        }
      }else{
        if(this.tela[0] === '-'){
          this.segundoNumero = this.segundoNumero.substring(1,this.segundoNumero.length)
          this.tela = this.tela.substring(1,this.tela.length)
          return
        }
      }

      if(this.operador === ''){
        this.primeiroNumero = '-' + this.primeiroNumero
        this.tela = '-' + this.tela
      }else{
        this.segundoNumero = '-' + this.segundoNumero
        this.tela = '-' + this.tela
      }
    },

    adicionarOperador(op){
      this.operador = op
      this.tela = ''
      this.atualizarTela()
    },

    adicionarPorcentagem(){
      let url
      this.operador = '%'

      if(this.calculo === '' && this.primeiroNumero !== ''){
        url = `http://127.0.0.1:3000/calculadora/${this.operadores[this.operador]}/${this.primeiroNumero}`
      }else if(this.calculo !== ''){
        url = `http://127.0.0.1:3000/calculadora/${this.operadores[this.operador]}/${this.calculo}`
      }

       fetch(url)
      .then(res => {
        res.json().then(data => {
          if(this.calculo === ''){
            this.resultado = this.primeiroNumero+this.operador+this.segundoNumero+'='
          }else{
            this.resultado = this.calculo+this.operador+this.segundoNumero+'='
          }
         
          if(data.status !== 200){
            this.tela = 'ERRO'
          }else{
            this.tela = data.resultado
            this.calculo = data.resultado
          }

          this.primeiroNumero = ''
          this.segundoNumero = ''
          // this.operacaoExibida = true
        })
      })
      .catch(err =>  console.error('Não foi possível achar a informação', err))


    },

    adicionarRaizQuadrada(){
       let url
      this.operador = '√'

      if(this.calculo === '' && this.primeiroNumero !== ''){
        url = `http://127.0.0.1:3000/calculadora/${this.operadores[this.operador]}/${this.primeiroNumero}`
      }else if(this.calculo !== ''){
        url = `http://127.0.0.1:3000/calculadora/${this.operadores[this.operador]}/${this.calculo}`
      }

       fetch(url)
      .then(res => {
        res.json().then(data => {
          if(this.calculo === ''){
            this.resultado = this.operador+this.primeiroNumero+'='
          }else{
            this.resultado = this.operador+this.calculo+'='
          }
         
          if(data.status !== 200){
            this.tela = 'ERRO'
          }else{
            this.tela = data.resultado
            this.calculo = data.resultado
          }

          this.primeiroNumero = ''
          this.segundoNumero = ''
          // this.operacaoExibida = true
        })
      })
      .catch(err =>  console.error('Não foi possível achar a informação', err))
    },

    calcular(){
      if(this.operador === ''){
        return
      } 

      if(this.primeiroNumero === ''){
        this.primeiroNumero = '0'
      }

      if(this.segundoNumero === ''){
        this.segundoNumero = '0'
      }
      let URL = ''
      if(this.calculo !== ''){
        URL = `http://127.0.0.1:3000/calculadora/${this.operadores[this.operador]}/${this.calculo}/${this.segundoNumero}`
      }else{
        URL = `http://127.0.0.1:3000/calculadora/${this.operadores[this.operador]}/${this.primeiroNumero}/${this.segundoNumero}`
      }
      
      

      fetch(URL)
      .then(res => {
        res.json().then(data => {
          if(this.calculo === ''){
            this.resultado = this.primeiroNumero+this.operador+this.segundoNumero+'='
          }else{
            this.resultado = this.calculo+this.operador+this.segundoNumero+'='
          }
         
          if(data.status !== 200){
            this.tela = 'ERRO'
          }else{
            this.tela = data.resultado
            this.calculo = data.resultado
          }

          this.primeiroNumero = ''
          this.segundoNumero = ''
          // this.operacaoExibida = true
        })
      })
      .catch(err =>  console.error('Não foi possível achar a informação', err))
      
    }
  }
}
</script>


<style>
body{
  overflow: hidden;
  background: linear-gradient(#f4f4ed, white);
}

.container{
  width: 95%;
  height: 50vh;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: center;
}

.calculator{
  width: 370px;
  margin: auto;
  border-radius: 2px;
  background:  #f2f2f2;
  padding: 15px 15px 20px 20px;
  box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.5);
}

#user_input{
  box-sizing: border-box;
  width: 98%;
  padding: 40px 5px;
  background: whitesmoke;
  text-align: right;
  direction: ltr;
  outline: none;
  border: none;
  font-size: 2rem;
}

#user_input2{
  box-sizing: border-box;
  width: 98%;
  padding: 0px 5px;
  background: whitesmoke;
  text-align: right;
  direction: ltr;
  outline: none;
  border: none;
  font-size: 2rem;
}

.btn{
  font-size: 1.5rem;
  width: 24%;
  height: 45px;
  border-radius: 1px;
  border:none;
  outline: none;
  margin-top: 3px;
  background: #164d9b;
  border: 1px solid #000;
  cursor: pointer;
}

.btnEqual{
  font-size: 1.5rem;
  width: 96%;
  height: 45px;
  border-radius: 1px;
  border: none;
  outline: none;
  margin-top: 3px;
  background: #164d9b;
  cursor: pointer;
}

.btn:hover, .btnEqual:hover{background-color: rgba(128, 128, 128, 0.1); color: #164d9b;}

@media(max-width:480px){
  .btn{width: 23.4%;}
  .btnEqual{width: 94%;}
}

@media(max-width:320px){
  .btn{width: 23%;}
}

</style>
