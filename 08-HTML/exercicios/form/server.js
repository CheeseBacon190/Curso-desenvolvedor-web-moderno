const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const port = 8081


app.use(bodyParser.urlencoded({extended: true}))

app.post('/usuarios', (request, response) => {
    console.log(request.body)
    response.send("<h1>Concluido. Usuário Incluido</h1>")
})


app.post('/usuarios/:id', (request, response) => {
    console.log(request.params.id)
    console.log(request.body)
    response.send("<h1>Concluido. Usuário Alterado</h1>")
})


app.listen(port)

console.log(`rodando na ${port}...`)
