//Desafio: Encontrar mulher chinesa com o menor salario

const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')


const isChineseWoman = obj => obj.genero === 'F' && obj.pais === 'China' 
const getMinSalary = (func, funcAtual) => func.salario < funcAtual.salario ? func : funcAtual


// Fazendo requisição HTTP de dados em json
axios.get(url).then((response) => {
    const funcionarios = response.data
    console.log(funcionarios.filter(isChineseWoman).reduce(getMinSalary))
})


