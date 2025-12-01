// cria a lista de produtos carrinho, onde cada produto é um objeto com nome e preço
const carrinho = [
  { nome: 'Teclado', preco: 150 },
  { nome: 'Mouse', preco: 50 },
  { nome: 'Monitor', preco: 800 }
];

// declara o valor do frete para essa compra
const frete = 20;

// o total começa em 0 e aumenta de acordo com os produtos
let totalDaCompra = 0;

// loop para somar (p/ cada objeto dentro do array carrinho)
for (const item of carrinho) {
  totalDaCompra = totalDaCompra + item.preco;
  // p/ cada item, a variável 'totalDaCompra' é atualizada
}

// adiciona o frete
totalDaCompra = totalDaCompra + frete;

// exibe o valor final no console
console.log(`O valor final com frete (R$20,00) é: R$ ${totalDaCompra}`);