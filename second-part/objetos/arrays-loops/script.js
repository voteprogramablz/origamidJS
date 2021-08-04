
// const tempoAulas = aulas.map(aula => aula.min);
// console.log(tempoAulas)

// function nomeAulas(item, index, array) {
//   return item.nome
// }

//const arrayNomeAulas = aulas.map((item, index, array) => item.nome)

// const arrayNomeAulas = aulas.map(nomeAulas)

// console.log(arrayNomeAulas);

// const puxarNomes = aula => aula.nome;
// const nomesAulas = aulas.map(puxarNomes);
// ['HTML 1', 'HTML 2', 'CSS 1', 'JS 1']



//--------------------------------------------------------------------

// const numbers = [4, 5, 8, 2, 12, 154 ,85,4,984,984,8,7,54]

// const reduceNumbers = numbers.reduce((accumulator, item) => {
  
//   console.log(`Accumulator = ${accumulator} -- item = ${item}`);
  
//   return accumulator + item
// } , 0 )




// const maiorNumero = numbers.reduce((acc, item) => acc < item ? item : acc)

// const aulas = [
//   {
//     nome: 'HTML 1',
//     min: 15
//   },
//   {
//     nome: 'HTML 2',
//     min: 10
//   },
//   {
//     nome: 'CSS 1',
//     min: 20
//   },
//   {
//     nome: 'JS 1',
//     min: 25
//   },
// ]

// const reduceNomeAulas = aulas.reduce((acc, item, index) => {
//   acc[index] = item.nome
//   return acc
// } , [])


// console.log(reduceNomeAulas);

//------------------------------------

// Selecione cada curso e retorne uma array
// com objetos contendo o título, descricao,
// aulas e horas de cada curso

let cursos = document.querySelectorAll('.curso')
cursos = Array.from(cursos)
let cursosArray = cursos.map((item) => {
  const titulo = item.querySelector('h1').innerHTML
  const descricao = item.querySelector('p').innerHTML
  const aulas = +item.querySelector('.aulas').innerHTML
  const horas = +item.querySelector('.horas').innerHTML
  const objCurso = {
    titulo: titulo,
    descricao: descricao,
    aulas: aulas,
    horas:horas,
  }

  return objCurso
})

console.log(cursosArray);

// Retorne uma lista com os
// números maiores que 100
const numeros = [3, 44, 333, 23, 122, 322, 33];

isGreaterThanHundred = number => number > 100

const numbersGreaterThanHundred = numeros.filter(isGreaterThanHundred)

// Verifique se Baixo faz parte
// da lista de instrumentos e retorne true
const instrumentos = ['Guitarra', 'Baixo', 'Bateria', 'Teclado']

console.log(instrumentos.includes('Baixo'));

// Retorne o valor total das compras
const compras = [
  {
    item: 'Banana',
    preco: 'R$ 4,99'
  },
  {
    item: 'Ovo',
    preco: 'R$ 2,99'
  },
  {
    item: 'Carne',
    preco: 'R$ 25,49'
  },
  {
    item: 'Refrigerante',
    preco: 'R$ 5,35'
  },
  {
    item: 'Quejo',
    preco: 'R$ 10,60'
  }
]

const total = compras.reduce((acc, item) => {
  item.preco = +item.preco.toLowerCase().replace('r$', '').trim().replace(',','.')
  acc += item.preco
  return acc
}, 0)


















