const carrinho = [
    '{ "nome": "Borracha", "preco": 3.45 }',
    '{ "nome": "Caderno", "preco": 13.90 }',
    '{ "nome": "Kit de lapis", "preco": 41.22 }',
    '{ "nome": "Caneta", "preco": 7.50 }'
]


/*************desafio*************
 * Retorna um array apenas com os preços
 */


// Minha resolução
const precos = carrinho.map((iten) => {
    let obj = JSON.parse(iten)
    return obj.preco
})

console.log(precos)


// Resolução do professor
const paraObj = json => JSON.parse(json)
const apenasPreco = produto => produto.preco

const resultado = carrinho.map(paraObj).map(apenasPreco)
console.log(resultado)