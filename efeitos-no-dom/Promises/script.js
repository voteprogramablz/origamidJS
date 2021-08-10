// Utilizando a API https://viacep.com.br/ws/${CEP}/json/
// crie um formulário onde o usuário pode digitar o cep
// e o endereço completo é retornado ao clicar em buscar
const btnSearch = document.querySelector('[data-searchCep]')

function fetchCepUrl (url) {
    fetch(`https://viacep.com.br/ws/${url}/json`)
        .then(response => response.json())
        .then(response => {
        const rua = response['logradouro']
        const numero = response['complemento']
        const cidade = response['localidade']
        const estado = response['uf']
        
        const res = document.querySelector('[data-res]')
        res.innerHTML = `Endereço: ${rua} <br> Número:${numero}. <br> Cidade de: ${cidade},<br> Estado do: ${estado}`
    })
}

function handleCep(event){
    event.preventDefault()
    const cep = document.querySelector('#cep').value
    fetchCepUrl(cep)
}

btnSearch.addEventListener('click', handleCep)

// Utilizando a API https://blockchain.info/ticker
// retorne no DOM o valor de compra da bitcoin and reais.
// atualize este valor a cada 30s


function updateBitcoinsBrl() {
    const bitcoin = document.querySelector('[data-bitcoin]')
    fetch('https://blockchain.info/ticker')
        .then(response => response.json())
        .then(response => bitcoin.innerHTML = response['BRL']['last'].toLocaleString('pt-br',{style:'currency', currency: 'BRL'}));
}

setInterval(updateBitcoinsBrl, 30 * 1000)

updateBitcoinsBrl()

// Utilizando a API https://api.chucknorris.io/jokes/random
// retorne uma piada randomica do chucknorris, toda vez que
// clicar em próxima


fetch('https://api.chucknorris.io/jokes/random')
    .then(response => response.json())
    .then(response => {
        const jokeNorris = document.querySelector('[data-chuckNorris]')
        jokeNorris.innerText = response.value;
    })
