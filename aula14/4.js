const carrinho = [
    { nome: 'Camiseta', preco: 29.99 },
    { nome: 'Calça', preco: 89.9 },
    { nome: 'Meias', preco: 9.99 }
];

const totalCompra = carrinho.reduce((acumulador, produto) => acumulador + produto.preco, 0);
console.log(totalCompra); 