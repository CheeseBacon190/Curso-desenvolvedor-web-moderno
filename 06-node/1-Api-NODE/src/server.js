// Config Express

const port = 3003


const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const dataBase = require('./dataBase')


app.use(bodyParser.urlencoded({ extended: true}))

// get forma de requisição
app.get('/products', (request, response, next) => {
    // irá converter o objeto em json e mandar como resposta da requisição
    response.send(dataBase.getAllProducts())
})

app.get('/products/:id', (request, response, next) => response.send(dataBase.getProduct(request.params.id)))

// salvar um produto com o metodo post
app.post('/products', (request, response, next) => {
    const product = dataBase.saveProducts({
        name: request.body.name,
        price: request.body.price
    })

    response.send(product) // json
})

// substituir produto
app.put('/products/:id', (request, response, next) => {
    const product = dataBase.saveProducts({
        id: request.params.id,
        name: request.body.name,
        price: request.body.price
    })

    response.send(product)
})

// Deletar Produto
app.delete('/products/:id', (request, response, next) => {
    const product = dataBase.deleteProduct(request.params.id)
    response.send(product)
})

app.listen(port, () => console.log(`listening in port: ${port}`))

console.log("Okay")