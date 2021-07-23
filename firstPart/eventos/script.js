/*
const img = document.querySelector('img')

callback = (event) => {
  console.log(event)
}

// img.addEventListener('click', callback)

const animaisLista = document.querySelector('.animais-lista')
console.log(animaisLista);
callbackLista = event => {
  console.log(event.currentTarget);
  console.log(event.target);
  console.log(event.type);
  console.log(event.path);
}

animaisLista.addEventListener( 'click' , callbackLista );

const linkExterno = document.querySelector('a[href^="http"]');

function clickNoLink(event){
  event.preventDefault()
  console.log(event.currentTarget.href)
}



linkExterno.addEventListener('click', clickNoLink);


window.addEventListener('keydown', handleKeybord)

function handleKeyboard(event) {
  if(event.key ==='f'){
    console.log('F de farofa kkkk')
    document.body.classList.toggle('sua-mae-eh-putinhaaaaaaa')
  }
}

window.addEventListener('keydown', handleKeyboard);

const imgs = document.querySelectorAll('img');

function handleImg(event) {
  console.log(event.target)
}

imgs.forEach((img) => {
  img.addEventListener('click', handleImg)
})
*/

// Quando o usuário clicar nos links internos do site,
// adicione a classe ativo ao item clicado e remova dos
// demais itens caso eles possuam a mesma. Previna
// o comportamento padrão desses links

const linksInternos = document.querySelectorAll('a[href^="#"]')

function handleClick(event) {
  event.preventDefault()

  linksInternos.forEach(link => {
    link.classList.remove('ativo')
  });

  const link = event.target
  link.classList.add('ativo')

  
}

linksInternos.forEach(link => {
  link.addEventListener('click' , handleClick)
});


// Selecione todos os elementos do site começando a partir do body,
// ao clique mostre exatamente quais elementos estão sendo clicados
// Utilizando o código anterior, ao invés de mostrar no console,
// remova o elemento que está sendo clicado, o método remove() remove um elemento

const allElements = document.querySelectorAll('body *')
// console.log(allElements);

handleElement = event => {
  console.log(event.currentTarget)
}

allElements.forEach((elemento) => {
  elemento.addEventListener('click', handleElement)
})
// allElements.addEventListener('click', teste)




// Se o usuário clicar na tecla (t), aumente todo o texto do site. 

handleKeybord = (event) => {
  if(event.key === 't'){
    const body = document.querySelector('*')
    body.classList.toggle('font1')
    console.log(body);
  }
}

window.addEventListener('keydown', handleKeybord);