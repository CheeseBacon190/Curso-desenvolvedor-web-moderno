const fs = require('fs')
const caminho = __dirname + '/arquivo.json'

// lendo em forma sincrona
const conteudo = fs.readFileSync(caminho, 'utf-8')
console.log(conteudo)


// lendo de forma assincrona
// É mais interessante usar assincrona
fs.readFile(caminho, 'utf-8', (error, conteudo) => {
    const config = JSON.parse(conteudo)
    console.log(`${config.db.host}: ${config.db.port}`)
})


// lendo JSON de maineira mais simples
const config = require('./arquivo.json')
console.log(config.db)


//  lendo uma pasta
fs.readdir(__dirname, (err, arquivos) => {
    console.log('Conteudo da pasta')
    console.log(arquivos)
})