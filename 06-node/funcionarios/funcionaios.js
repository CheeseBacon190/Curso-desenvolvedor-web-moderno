const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')

// Fazendo requisição HTTP de dados em json
axios.get(url).then((response) => {
    const funcionarios = response.data
    console.log(funcionarios)
})


