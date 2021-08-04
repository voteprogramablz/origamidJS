// Retorne o url da página atual utilizando o objeto window

const urlDaPagina = window.document.location.href
console.log(urlDaPagina);

// Seleciona o primeiro elemento da página que
// possua a classe ativo

const firstActiveClass = document.querySelectorAll('.ativo')[0]
console.log(firstActiveClass);

// Retorne a linguagem do navegador
const lang = window.document.querySelector('html').lang
console.log(lang);

if (lang === 'en-us') {
    document.querySelector('html').lang = 'pt-br'
}

const lang1 = window.document.querySelector('html').lang
console.log(lang1);

// Retorne a largura da janela 

const widthOfPage = window.document.body.clientWidth
console.log(widthOfPage);
