/* 
* Object.preventExtensions
* Prefine adcionar mais metodos e atributos
*/

const produto = Object.preventExtensions({
    nome: 'Qualquer',
    preco: 1.99,
    tag: 'Promoção'
})

console.log('Extensível: ', Object.isExtensible(produto))

produto.nome = 'Borracha escolar'
// não possivel add mais atributos
produto.descricao = "Borrancha escolar branca"
delete produto.tag

console.log(produto)


// Object.seal
//é possivel modificar os atributos
// não pode excluir e nem add atributos
const pessoa = {nome: "julia", idade: 35}
Object.seal(pessoa)

console.log("Selado:", Object.isSealed(pessoa))

