const comidas = ['Pizza', 'Frango', 'Carne', 'Macarrão'];
// Remova o primeiro valor de comidas e coloque em uma variável
// Remova o último valor de comidas e coloque em uma variável
// Adicione 'Arroz' ao final da array
// Adicione 'Peixe' e 'Batata' ao início da array

const firstComidas = comidas.shift()
const lastComidas = comidas.pop()
comidas.push('Arroz')
comidas.unshift('Peixe', 'Batatas')

console.log(comidas)

const estudantes = ['Marcio', 'Brenda', 'Joana', 'Kleber', 'Julia'];
estudantes.sort()
console.log(estudantes);

estudantes.reverse()
console.log(estudantes);

console.log(estudantes.includes('Joana'));
console.log(estudantes.includes('Juliana'));

// Arrume os estudantes em ordem alfabética
// Inverta a ordem dos estudantes
// Verifique se Joana faz parte dos estudantes
// Verifique se Juliana faz parte dos estudantes

let html = `<section>
              <div>Sobre</div>
              <div>Produtos</div>
              <div>Contato</div>
            </section>`

html = html.split('section').join('ul').split('div').join('li')

console.log(html);
// Substitua section por ul e div com li,
// utilizando split e join

const carros = ['Ford', 'Fiat', 'VW', 'Honda'];
const carrosBackup = carros.slice()
carros.pop()

console.log(carrosBackup, carros);

// Remova o último carro, mas antes de remover
// salve a array original em outra variável