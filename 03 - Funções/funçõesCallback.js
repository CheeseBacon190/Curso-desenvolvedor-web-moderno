// Um dos conceitos mais importantes do JavaScript
// Callback é passar uma função para outra função 
// essa função irá ser chamada a partir de um determinado evento

const fabricantes = ['mercedes', 'ferrari', 'bmw']

const imprimir = (nome, indice) => console.log(`${indice + 1}. ${nome}`)

fabricantes.forEach(imprimir)
fabricantes.forEach((fabricante) => console.log(fabricante))