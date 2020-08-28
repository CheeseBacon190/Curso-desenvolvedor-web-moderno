/**
 * navegando entre pastas
 * dois pontos para sair de uma pasta
 */
const moduloA = require('../../modulos/moduloA')
// outra maneira: copiando o diretório do arquivo
const moduloB = require('C:/Users/gusta/OneDrive/Área de Trabalho/cursos/JavaScript/dev web moderno/06-node/modulos/moduloB.js')


console.log(moduloA.bemVindo)
console.log(moduloB.boaNoite())

const c = require('./pastaC')
console.log(c.ola2)

const http = require('http')
const porta = 8080
http.createServer((req,res) =>{
    res.write('Boa noite ;)')
    res.end()
}).listen(porta)
console.log('http://localhost:8080')