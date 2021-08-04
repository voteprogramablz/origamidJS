// Mude a cor da tela para azul e depois para vermelho a cada 2s.

// setInterval(() => {
//   if (document.body.style.background == 'blue'){
//     document.body.style.background = 'red'
//   } else {
//     document.body.style.background = 'blue'
//   }
// } , 2000)

// Crie um cronometro utilizando o setInterval. Deve ser possível
// iniciar, pausar e resetar (duplo clique no pausar).
import cronometro from './cronometro.js';

export default function initCronometro(){
}

let btnStart = document.querySelector('[data-btn]')
let btnReset = document.querySelector('[data-btnReset]')

btnStart.addEventListener('click', iniciarCronometro)

export function iniciarCronometro(){
  btnReset.style.display = 'inline-block'
  btnStart.classList.add('active');
  btnStart.innerText = 'Pausar';
  
  cronometro();
  btnStart.removeEventListener('click', iniciarCronometro)
  btnStart.addEventListener('click', pausarCronometro)
}

export function pausarCronometro(){
  btnStart.classList.remove('active');
  btnStart.innerText = 'Iniciar'
  btnStart.addEventListener('click', iniciarCronometro)
}