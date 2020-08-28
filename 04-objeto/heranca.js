const pai = {
    nome: 'Pedro', 
    cabelo: 'Preto'
}


const filha1 = Object.create(pai) // criando um objt e herdando caracteristicas do objt pai
filha1.nome = 'Ana'
console.log(filha1.nome, filha1.cabelo)


// criando um objt e herdando caracteristicas do objt pai e definindo atributos
const filha2 = Object.create(pai, {
    nome: {
        value: 'Julia',
        writable: false, 
        enumerable: true
    },

    cabelo: {
        value: 'Loiro',
        writable: false,
        enumerable: true
    }
})

console.log(filha2.nome, filha2.cabelo)


for (let key in filha1) 
    filha1.hasOwnProperty(key) ? console.log(key) : console.log(`Por herança: ${key}`)
    

for (let key in filha2) 
    filha2.hasOwnProperty(key) ? console.log(key) : console.log(`Por herança: ${key}`)
        