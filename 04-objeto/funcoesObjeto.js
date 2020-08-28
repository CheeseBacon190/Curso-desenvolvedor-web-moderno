const criaPessoa = (nome,idade,peso) => {
    return {
        nome,
        idade, 
        peso
    }
}

const p1 = criaPessoa('Gustavo', 20, 70)

console.log(p1)
console.log(Object.keys(p1)) // retornas as chaves do objeto
console.log(Object.values(p1)) // retorna os valores
console.log(Object.entries(p1)) // retorna um array com as chaves e valores em array: [ [ 'nome', 'Gustavo' ], [ 'idade', 20 ], [ 'peso', 70 ] ]

Object.entries(p1).forEach(element => {
    console.log(`${element[0]}: ${element[1]}`)
});

// usando o mesmo forEach com destructuring
Object.entries(p1).forEach(([chave, valor]) => {
    console.log(`${chave}: ${valor}`)
})


// Definir propiedades
Object.defineProperty(p1, 'dataNascimento', {
    enumerable: true,     // definir se o atributo podera ser mostrado ou não
    writable: false,     // definir se o atributo podera ser modificado
    value: '01/12/1999' // definir valor do atributo
})

console.log(p1)
p1.dataNascimento = '01/12/2020'
console.log(p1)