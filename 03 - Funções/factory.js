// uma função factory retorna um objeto

// factory simples
function criarPessoa(nome,sobrenome,idade){
    return {
        nome: nome,
        sobrenome: sobrenome,
        idade: idade
    }
}


console.log(criarPessoa("gustavo","reis","20"))


function criarProduto(nome,preco,desconto = 0.1){
    return{
        nome,
        preco,
        desconto
    }
}

console.log(criarProduto("coca-cola", 10))