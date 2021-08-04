// Mostre no console cada parágrado do site

const palaglafux = document.querySelectorAll('p')

palaglafux.forEach(element => console.log(element));

// Mostre o texto dos parágrafos no console

const teistuDusPalaglafux = document.querySelectorAll('p')

teistuDusPalaglafux.forEach(element => console.log(element.innerHTML));

// Como corrigir os erros abaixo:
const imgs = document.querySelectorAll('img');

imgs.forEach((item, index )=> {
  console.log(item, index);
});

let i = 0;
imgs.forEach(() => {
  console.log(i++);
});

imgs.forEach(() => i++);

const teste = document.querySelector('html').getAttribute('lang')

if(teste === 'pt-br') {
    console.log('A página está traduzida para: Portugês Brasileiro')
}

// console.log(teste);