
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

const aulas = [
  {
    nome: 'HTML 1',
    min: 15
  },
  {
    nome: 'HTML 2',
    min: 10
  },
  {
    nome: 'CSS 1',
    min: 20
  },
  {
    nome: 'JS 1',
    min: 25
  },
]

const reduceNomeAulas = aulas.reduce((acc, item, index) => {
  acc[index] = item.nome
  return acc
} , [])


console.log(reduceNomeAulas);




















