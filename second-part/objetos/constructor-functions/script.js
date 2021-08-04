// function Carro(marca, precoInicial) {
//     const taxa = 1.2;
//     const precoFinal = precoInicial * taxa;
//     this.marca = marca;
//     this.preco = precoFinal;
//     console.log(this);
//   }
  
//   const honda = new Carro('Honda', 2000);

// const Dom = {
//     seletor: 'li',
//     element() {
//         return document.querySelector(this.seletor)
//     },
//     ativar () {
//         this.element().classList.add('ativar')
//     }
// }

// function Dom(seletor){
//     this.element = function() {
//         return document.querySelector(seletor)
//     }

//     this.ativar = function() {
//         this.element().classList.add('ativar')
//     }
// }

// const li = new Dom('li')
// const ul = new Dom('ul')

// Transforme o objeto abaixo em uma Constructor Function
function Pessoa(nome, idade){
    this.nome = nome;
    this.idade = idade;
    this.andar = function() {
      console.log(this.nome + ' andou');
    }
}
  
  // Crie 3 pessoas, João - 20 anos,
  // Maria - 25 anos, Bruno - 15 anos
  
  const joao = new Pessoa('João', 20)
  const maria = new Pessoa('Maria', 25)
  const bruno = new Pessoa('bruno', 15)
  
  // Crie uma Constructor Function (Dom) para manipulação
  // de listas de elementos do dom. Deve conter as seguintes
  // propriedades e métodos:
  //
  // elements, retorna NodeList com os elementos selecionados
  // addClass(classe), adiciona a classe a todos os elementos
  // removeClass(classe), remove a classe a todos os elementos
  
function Dom(seletor) {
    this.elements = document.querySelectorAll(seletor)
    this.addClass = function(classe){
        this.elements.forEach(elemento => {
            elemento.classList.add(classe)
        });
    }
    this.removeClass = function(classe) {
        this.elements.forEach(elemento => {
            elemento.classList.remove(classe)
        });
    }
}

const teste = new Dom('ul')