// operador ... rest(juntar)/ spread(espalhar)

// rest em funções
const somar = (...num) => {
    let total = 0
    num.forEach(n => total += n)
    return total
}

console.log(somar(1,2,3,4,5,6,7,8))

// spread em objetos
// é possivel passar novos atributos junto com spread
const funcionario = {nome: 'maria', salario: 12348.99}
const clone = {ativo: true, ...funcionario}

console.log(funcionario)
console.log(clone)

//spread em arrays
const listaDefrutas = ['maçã', 'goiaba', 'laranja']
const novaListaDeFrutas = [...listaDefrutas, 'Percego', 'manga']

console.log(listaDefrutas)
console.log(novaListaDeFrutas)