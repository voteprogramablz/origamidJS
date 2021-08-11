// 'use strict'

// // const cliente = {
// //     nome: 'Andre',
// //     compras: {
// //       digitais: {
// //         livros: ['Livro 1', 'Livro 2'],
// //         videos: ['Video JS', 'Video HTML']
// //       },
// //       fisicas: {
// //         cadernos: ['Caderno 1']
// //       }
// //     }
// //   }
 

// // const {livros: livrosDigitais} = cliente.compras.digitais

// // console.log(livrosDigitais);



// class Button {
//     constructor(text, background) {
//       this.text = text;
//       this.background = background;
//     }
//     element() {
//       const buttonElement = document.createElement('button');
//       buttonElement.innerText = this.text;
//       buttonElement.style.background = this.background;
//       return buttonElement;
//     }
//   }
  
//   const blueButton = new Button('Comprar', 'blue');
  
// const button = {
//     set element(tipo) {
//       this._element = document.createElement(tipo);
//     },

//     get element() {
//       return this._element;
//     }
//   }
  
//   button.element = 'button'; // set
//   button.element; // get (<button></button>);
  
// class Veiculo {
//     constructor(rodas) {
//       this.rodas = rodas;
//     }
//     acelerar() {
//       console.log('Acelerou');
//     }
//   }
  
//   class Moto extends Veiculo {
//     empinar() {
//       console.log('Empinou com ' + this.rodas + ' rodas');
//     }
//   }
  
//   const honda = new Moto(2);
//   honda.empinar();
  // //---------------------------------------------------------

// // Extraia o backgroundColor, color e margin do btn
// const btn = document.querySelector('button');
// const btnStyles = getComputedStyle(btn);

// const {backgroundColor, color, margin} = btnStyles

// console.log(backgroundColor, color, margin);

// // Troque os valores das variáveis abaixo
// let cursoAtivo = 'JavaScript';
// let cursoInativo = 'HTML';

// [cursoAtivo, cursoInativo] = [cursoInativo, cursoAtivo]

// // Corrija o erro abaixo
// const cachorro = {
//   nome: 'Bob',
//   raca: 'Labrador',
//   cor: 'Amarelo'
// }

// const {cor: bobCor} = cachorro;

// const btns = [...document.querySelectorAll('button')];
// const btnsArray = [...btns];

// const frase = 'Isso é JavaScript';
// const fraseArray = [...frase];

// console.log(btns, btnsArray);

// //-----------------------------------------------------------------

// class Usuario {
//     constructor(email, senha) {
//         this.email = email;
//         this.senha = senha;
//     }
//     isAdmin(){
//         if (this.admin) {
//             return true
//         } else {
//             return false
//         }
//     }
// }

// class Admin extends Usuario {
//     constructor(email, senha){
//         super(email, senha)
//         this.admin = true
//     }
// }

// const User1 = new Usuario('email@teste.com', 'senha123');
// const Adm1 = new Admin('email@teste.com', 'senha123');
// console.log(User1.isAdmin()) // false
// console.log(Adm1.isAdmin()) // true


// //--------------------------------------------------------------------

// const usuarios = [
//     { nome: 'Diego', idade: 23, empresa: 'Rocketseat' },
//     { nome: 'Gabriel', idade: 15, empresa: 'Rocketseat' },
//     { nome: 'Lucas', idade: 30, empresa: 'Facebook' },
//    ];

// const usuariosIdade = usuarios.map(({idade}) => idade)

// const rocketSeatEmployeeGreaterThan18 = usuarios.filter(({idade, empresa})=>{
//     const verification = idade >= 18 && empresa == 'Rocketseat'
//     return verification
// })

// const isAGoogleEmployee = usuarios.find(({empresa}) => empresa =='Google')

// const employeeMax50 = usuarios
//     .map((item) => {
//     return { nome: item.nome, idade: item.idade * 2, empresa: item.empresa }})
//     .filter(( { idade } ) => idade < 50)

// //-----------------------------------------------------------------------------

// // 3.1
// const arr = [1, 2, 3, 4, 5];
// arr.map(item =>item + 10);
// // 3.2
// const usuario = { nome: 'Diego', idade: 23 };
// const mostraIdade = ({idade}) => idade;
// mostraIdade(usuario);

// // 3.3
// const [nome, idade] = ["Diego", 23];
// const mostraUsuario = (nome = 'Diego', idade = 18) => {
//  return { nome, idade };
// }
// mostraUsuario(nome, idade);
// mostraUsuario(nome);

// // 3.4
// const promise = () => new Promise(resolve => resolve())
   
// const empresa = {
//     nome: 'Rocketseat',
//     endereco: {
//     cidade: 'Rio do Sul',
//     estado: 'SC',
//     }
// };

// const {nome, endereco:{cidade, estado}} = empresa

// console.log(nome); // Rocketseat
// console.log(cidade); // Rio do Sul
// console.log(estado); // SC

// //----------------

// function mostraInfo({nome, idade}) {
//     return `${nome} tem ${idade} anos.`;
// }
// mostraInfo({ nome: 'Diego', idade: 23 })

// const arr = [1, 2, 3, 4, 5, 6]

// const [x, y] = [arr[0], [...arr].slice(1)]
// console.log(x); // 1
// console.log(y); // [2, 3, 4, 5, 6]

// function soma(...n) {
//     const total = n.reduce((acc,item) => acc + item)
//     return total
// }
// // function soma...
// console.log(soma(1, 2, 3, 4, 5, 6)); // 21
// console.log(soma(1, 2)); // 3


// //-----------------

// const usuario = {
//     nome: 'Diego',
//     idade: 23,
//     endereco: {
//     cidade: 'Rio do Sul',
//     uf: 'SC',
//     pais: 'Brasil',
//     }
// };
   

// const usuario2 = {...usuario, nome: "Gabriel"}
// const usuario3 = {...usuario, cidade: "Lontras"}

// const usuario = 'Diego';
// const idade = 23;
// console.log(`O usuário ${usuario} possui ${idade} anos`);

const nome = 'Diego';
const idade = 23;
const usuario = {
 nome,
 idade,
 cidade: 'Rio do Sul',
};
