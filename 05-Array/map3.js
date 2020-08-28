//***************Implementando o map****************** */

Array.prototype.map2 = function(callback){
    const newArr = []
    for(let i = 0; i < this.length; i++){
        newArr.push(callback(this[i], i, this))
    }
    return newArr
}


const carrinho = [
    '{ "nome": "Borracha", "preco": 3.45 }',
    '{ "nome": "Caderno", "preco": 13.90 }',
    '{ "nome": "Kit de lapis", "preco": 41.22 }',
    '{ "nome": "Caneta", "preco": 7.50 }'
]


const precos = carrinho.map2((iten) => {
    let obj = JSON.parse(iten)
    return obj.preco
})

console.log(precos)

