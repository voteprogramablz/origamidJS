// Utilizando o foreach na array abaixo,
// some os valores de Taxa e os valores de Recebimento

const transacoes = [
    {
      descricao: 'Taxa do Pão',
      valor: 'R$ 39',
    },
    {
      descricao: 'Taxa do Mercado',
      valor: 'R$ 129',
    },
    {
      descricao: 'Recebimento de Cliente',
      valor: 'R$ 99',
    },
    {
      descricao: 'Taxa do Banco',
      valor: 'R$ 129',
    },
    {
      descricao: 'Recebimento de Cliente',
      valor: 'R$ 49',
    },
  ];
  
  transacoes[0].descricao.startsWith('Tax')

  let taxa = 0
  let recebimento = 0
  transacoes.forEach(item => {
      const valor = Number(item.valor.split('R$ ')[1])
      if(setString(item.descricao).startsWith('tax')){
        taxa += valor
      }

      if(setString(item.descricao).startsWith('receb')){
          recebimento += valor
      }
  });

//   console.log(`A taxa foi de ${taxa}R$ e foi recebido ${recebimento}R$`);

  // Retorne uma array com a lista abaixo
  const transportes = 'Carro;Avião;Trem;Ônibus;Bicicleta';

const arrayTransportes = transportes.split(';')
// console.log(arrayTransportes);
  
  // Substitua todos os span's por a's
  const html = `<ul>
                  <li><span>Sobre</span></li>
                  <li><span>Produtos</span></li>
                  <li><span>Contato</span></li>
                </ul>`;

  const newHtml = html.split('span').join('a')
//   console.log(newHtml);
  
  // Retorne o último caracter da frase
  const frase = 'Melhor do ano!';
//   console.log(frase[--frase.length]);
  
  // Retorne o total de taxas
  const transacoesBancarias = ['Taxa do Banco', '   TAXA DO PÃO', '  taxa do mercado', 'depósito Bancário', 'TARIFA especial'];

  function setString (string){
      return string.trim().toLowerCase()
  }

  transacoesBancarias.forEach(item => {
      const descricao = setString(item)
      console.log(descricao);
  });
  
  