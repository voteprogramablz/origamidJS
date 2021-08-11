import Countdown from './countdown.js';

const tempoParaONatal = new Countdown('24 December 2021 23:59:59 GMT-0300');
const tempoParaOAnoNovo = new Countdown('01 January 2022 00:00:00 GMT-0300');

console.log(tempoParaONatal.total);

setInterval(() => {
    console.log(tempoParaOAnoNovo.total);
}, 1000)

