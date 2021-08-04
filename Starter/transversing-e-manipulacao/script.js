// const lista = document.querySelector('.animais-lista');

// console.log(lista.children[--lista.children.length]);
// console.log(lista.querySelector('li:last-child'));

// console.log(lista.previousSibiling);

// const mapa = document.querySelector('.mapa');
// const animais = document.querySelector('.animais');
// const contato = document.querySelector('.contato');
// const titulo = contato.querySelector('.titulo');

// const novoh1 = document.createElement('h1');

// console.log(novoh1);

// novoh1.innerText = 'Oie linda';
// novoh1.classList.add('titulo');

// contato.replaceChild(novoh1, titulo)

// const cloneContato = contato.cloneNode(true);

// console.log(cloneContato);

// const h1 = document.querySelector('h1');
// const faq = document.querySelector('.faq');

// const cloneH1 = h1.cloneNode(true);

// cloneH1.classList.add('vermelho')

// faq.appendChild(cloneH1);

//------------------------------------------------------------------


// Duplique o menu e adicione ele em copy

const menu = document.querySelector('.menu');
const menuClone = menu.cloneNode('true')

const copy = document.querySelector('.copy')
copy.appendChild(menuClone)

// Selecione o primeiro DT da dl de Faq

const faqDL = document.querySelector('.faq')
const dt = faqDL.querySelector('dt')

// Selecione o DD referente ao primeiro DT

const dd = dt.nextElementSibling
console.log(dd);

// Substitua o conteúdo html de .faq pelo de .animais

const animaisInnerHTML = document.querySelector('.animais').innerHTML


faq.innerHTML = animaisInnerHTML



