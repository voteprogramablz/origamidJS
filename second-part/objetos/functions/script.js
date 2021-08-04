// window.element = document.queryelemento('li')

// function Dom(seletor) {
//   this.element = document.queryelemento(seletor);
// };

// Dom.prototype.ativo = function(classe) {
//   console.log(this)
//   this.element.classList.add(classe);
// };

// const ul = new Dom('ul')

// const li = {
//   element: document.queryelemento('li')
// }

// ul.ativo.call(li, 'oie')

// const numeros = [3,4,6,1,34,44,32];
// Math.max(numeros);
// Math.max.call(null, 3, 4, 5, 6, 7, 20);

//------------------------------------------------------------------------------

// Retorne a soma total de caracteres dos
// parágrafos acima utilizando reduce

const paragraphs = document.querySelectorAll('p')

// const arrayParagraphs = Array.from(paragraphs)
// const lettersParagraphCount = arrayParagraphs
//   .reduce((acc, paragraph) => acc + paragraph.innerText.length, 0 )

const lettersParagraphCount = Array.prototype.reduce
  .call(paragraphs, (acc, paragraph) => acc + paragraph.innerText.length, 0 )

// Crie uma função que retorne novos elementos
// html, com os seguintes parâmetros
// tag, classe e conteudo.

cleanString = string => {
  string = string.trim().split('')

  for(let i = 1, j = 0; i < string.length; i++, j++){
    if(string[i] === string[j] && string[i] === " "){
      string.splice(j, 1)
      --i
      --j
    }
  }
  return string.join('')
}

newHtml = function(t, c, content){
  const elemento = document.createElement(t)

  const classes = cleanString(c).split(' ')

  for(let i = 0 ; i < classes.length; i++){
    elemento.classList.add(classes[i])
  }
  elemento.innerText = content
  document.body.appendChild(elemento)
}

newHtml('p', 'ativo    carousel ', 'Oi linda')
newHtml('p', 'sim testando  classe ', 'Oi gente, esse é um teste :D')

// Crie uma nova função utilizando a anterior como base
// essa nova função deverá sempre criar h1 com a
// classe titulo. Porém o parâmetro conteudo continuará dinâmico

const h1TitleClass = newHtml.bind(null, 'h1', 'title')

h1TitleClass('Oiiii kkkkk')
