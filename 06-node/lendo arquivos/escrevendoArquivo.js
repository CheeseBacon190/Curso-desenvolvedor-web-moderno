const fs = require('fs')

const produto = {
    nome: 'Celular',
    preco: 1249.99,
    desconto: 0.15
}

// Escrevendo um arquivo JSON
const salvarArquivo = err => console.log(err || "Arquivo salvo")
fs.writeFile(__dirname + '/arquivoGerado.json', JSON.stringify(produto) , salvarArquivoar)