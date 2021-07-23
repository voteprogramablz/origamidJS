// Verifique a distância da primeira imagem
// em relação ao topo da página

const distFirstImgToTop = document.querySelector('img').offsetTop

// console.log(distFirstImgToTop);

// Retorne a soma da largura de todas as imagens


function somaImagens(){
  const allImgs = document.querySelectorAll('img')
  let soma = 0
  allImgs.forEach(link => {
    soma += link.offsetWidth
  });

console.log(soma)
}

window.onload = function() {
  somaImagens();
}


// Verifique se os links da página possuem
// o mínimo recomendado para telas utilizadas
// com o dedo. (48px/48px de acordo com o google)

const links = document.querySelectorAll('a')

console.log(links);

links.forEach(link => {
  const linkWidth = link.offsetWidth
  const linkHeight = link.offsetHeight
  if(linkWidth >= 48 && linkHeight >= 48) {
    console.log(link, 'Possui acessibilidade');
  } else {
    console.log(link, 'Não possui boa acessibilidade');
  }
});

// Se o browser for menor que 720px,
// adicione a classe menu-mobile ao menu

const browserSmall = window.matchMedia('(max-width: 720px)').matches

if(browserSmall) {
  document.querySelector('.menu').classList.add('menu-mobile')
} else {
  document.querySelector('.menu').classList.remove('menu-mobile')
}

console.log(browserSmall);