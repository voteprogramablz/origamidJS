// const cleanCPF = (cpf) => {
//     const CPF = cpf;
//     const regexpCPF = /[^\d]+/g
//     const CPFCleaned = CPF.replace(regexpCPF, '')
//     if(CPFCleaned.length === 11) {
//         const cpfRegExpFormat = /(\d{3})(\d{3})(\d{3})(\d{2})/;
//         const cpfFormated = CPFCleaned.replace(cpfRegExpFormat, '$1.$2.$3-$4');
//         return cpfFormated;
//     } else {
//         console.log('Não é um CPF');
//     }
// }

// const meuCpf = cleanCPF('238 ashauisha@!&*@!¨427 *&!(*@&saahk 459 &A*14')



// let i = 1;

// let regexpResult;
// while(regexpResult = regexp.exec(frase) !== null) {
    //     console.log(regexpResult);
    // }
    
    
// const frase = 'JavaScript, TypeScript, CoffeeScript, Java';

// const regexp = /\w+/;
    
// const resultados = frase.split(regexp)

// console.log(resultados);


const tags = `
<ul>
  <li>Item 1</li>
  <li>Item 2</li>
</ul>
`;

const regexp = /(?<=<\/?)\w+/g

const resultado = tags.replace(regexp, '$&')

console.log(resultado);