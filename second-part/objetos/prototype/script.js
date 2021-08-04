// function Pessoa(nome, idade){
//     this.nome = nome;
//     this.idade = idade;
//     function teste () {
//         return 'sua mae é minha kkkk'
//     }
// }

// const andre = new Pessoa('André', 28)

// Pessoa.prototype.sexo = 'buceta'

// const listaAnimais  = ['cachorro','gato','cavalo','sua mae']

// const lista = document.querySelectorAll('li')

// const Carro = {
//     marca: 'Ford',
//     preco: 2000,
//     andar() {
//         return true
//     }
// }

//--------------------------------------------------------------------


// Crie uma função construtora de Pessoas
// Deve conter nome, sobrenome e idade
// Crie um método no protótipo que retorne
// o nome completo da pessoa

function Pessoa (nome, sobrenome, idade){
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.idade = idade;
}

Pessoa.prototype.nomeCompleto = function(){
    console.log(this);
    return `${this.nome} ${this.sobrenome}`
}

const andre = new Pessoa('André','Rodrigues de Melo', 21)

// Liste os métodos acessados por 
// dados criados com NodeList,
// HTMLCollection, Document



// Liste os construtores dos dados abaixo
const li = document.querySelector('li');

li;
li.click;
li.innerText;
li.value;
li.hidden;
li.offsetLeft;
li.click();

console.log(li.constructor.name,
    li.click.constructor.name,
    li.innerText.constructor.name,
    li.value.constructor.name,
    li.hidden.constructor.name,
    li.offsetLeft.constructor.name,);

// Qual o construtor do dado abaixo:
li.hidden.constructor.name;
