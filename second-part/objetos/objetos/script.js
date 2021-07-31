// Retorne um número aleatório
// entre 1050 e 2000

// console.log(Math.floor(Math.random() * (2000 - 1050 + 1)) + 1050);

// Retorne o maior número da lista abaixo
const numeros = '4, 5, 20, 8, 9';

let numerosArray = numeros.split(', ')

for(let i = 0; i < numerosArray.length; i++) {
  numerosArray[i] = Number(numerosArray[i])
}

function maior (array) {
  let a = array[0]
  for(let i = 0; i < array.length; i++) {
    if(a < array[i])
      a = array[i]
  }
  return a
}

// console.log(maior(numerosArray));

// Crie uma função para limpar os preços
// e retornar os números com centavos arredondados
// depois retorne a soma total
const listaPrecos = ['R$ 59,99', ' R$ 100,222',
                     'R$ 230  ', 'r$  200'];

function sumArray(array) {
  let soma = 0
  for(let i = 0; i < array.length; i++) {
    array[i] = Number(Number(array[i].toLowerCase().replace('r$ ', '').trim().replace(',','.')).toFixed(2))
    soma += array[i]
  }
  return 'R$ ' + soma.toString()  
}

