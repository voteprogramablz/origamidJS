
// Crie uma função para verificar se um valor é Truthy
function isTruthy(valor) {
    !!valor == true ? console.log('É um valor Truthy') : console.log('É um valor Falsy')
}

isTruthy('')

// Crie uma função matemática que retorne o perímetro de um quadrado
// lembrando: perímetro é a soma dos quatro lados do quadrado
var calcularPerimetro = lado => lado * 4

// Crie uma função que retorne o seu nome completo
// ela deve possuir os parâmetros: nome e sobrenome
var fullName = (firstName, lastName) => `${firstName} ${lastName}`

console.log(fullName('André', 'Rodrigues de Melo')); 

// Crie uma função que verifica se um número é par

const isEven = number => {
    const restDivision = number % 2
    switch ( restDivision ) {
        case ( 0 ): 
            console.log('Is even');
            break
        case ( 1 ):
            console.log('Is odd');
            break
    }
}

isEven(5)

// Crie uma função que retorne o tipo de
// dado do argumento passado nela (typeof)

const kindOfData = data => typeof(data)

console.log(kindOfData(isEven));

// addEventListener é uma função nativa do JavaScript
// o primeiro parâmetro é o evento que ocorre e o segundo o Callback
// utilize essa função para mostrar no console o seu nome completo
// quando o evento 'scroll' ocorrer.

addEventListener('scroll', () => {
    console.log('André Rodrigues de Melo')
})

// Corrija o erro abaixo
var totalPaises = 193;

function precisoVisitar(paisesVisitados) {
    return `Ainda faltam ${totalPaises - paisesVisitados} países para visitar`;
  }
function jaVisitei(paisesVisitados) {
return `Já visitei ${paisesVisitados} do total de ${totalPaises} países`;
}
  precisoVisitar(20);
  jaVisitei(20);