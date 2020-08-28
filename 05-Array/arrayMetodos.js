
const pilotos = ['Vettel','Alonso','Raikkonen','Massa']

pilotos.pop() // remover ultimo elemento
console.log(pilotos)

pilotos.push('Verstappen') // Add um elemento no final
console.log(pilotos)

pilotos.shift() // remover primeiro elemento
console.log(pilotos)

pilotos.unshift('Hamilton') // add um elemento no inicio
console.log(pilotos)

// splice pode add e remover elementos
// array.splice(index, NumerDeElementos, ...Elementos)

// adicionar 
pilotos.splice(2, 0, 'Bottas', 'Massa')
console.log(pilotos)

// remover
pilotos.splice(3, 1)
console.log(pilotos)

const algunsPilotos1 = pilotos.slice(2) // gera um novo array a partir do index escolhido
console.log(algunsPilotos1)

const algunsPilotos2 = pilotos.slice(1, 4) // gera um novo array a partir de um intervalo de index
console.log(algunsPilotos2)