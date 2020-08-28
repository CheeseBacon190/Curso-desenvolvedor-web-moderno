// o metodo map server para fazer alguma transformação no array

const nums = [1,2,3,4,5]

// criar um array com os elemento de nums dobrados
let resultado = nums.map(num => num * 2)
console.log(resultado)


const soma10 = n => n + 10
const triplo = n => n * 3
const paraDinheiro = n => `R$ ${parseFloat(n).toFixed(2).replace('.',',')}`

let somado10 = nums.map(soma10)
console.log(somado10)

let triplicado = nums.map(triplo)
console.log(triplicado)

let paraReal = nums.map(paraDinheiro)
console.log(paraReal)