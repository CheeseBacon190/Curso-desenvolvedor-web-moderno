// Filtar array

const produtos = [
    {nome: 'Notebook', preco: 2499, fragil: true},
    {nome: 'iPad Pro', preco: 4199, fragil: true},
    {nome: 'Copo de vidro', preco: 12.49, fragil: true},
    {nome: 'Copo de plastico', preco: 18.99, fragil: false}
]

// minha resolução
console.log(produtos.filter((produto) => {
    return produto.fragil && produto.preco >= 500
}))


// resolução do professor
const checarFragil = (produto) => produto.fragil
const produtoCaro = (produto) => produto.preco >= 500

console.log(produtos.filter(checarFragil).filter(produtoCaro))