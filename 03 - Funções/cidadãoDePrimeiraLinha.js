// Forma literal
function func1() {}

// Armazenando em variavel
const func2 = function () {}

// Função arrow
const funcArrow = (parametro) => {}

//Função em array
const array  = [function(a,b){ return a + b } , func1 , func2]
// console.log(array[0](3, 2))  // usando função no array

// armazenar função em atributos de objetos
const objt = {}
objt.falar = function() {return 'olá'}

// Passar função como parametro
function func3(func) {
    func()   
}

// função dentro de função
function soma(a , b) {
    return function(c) {
        return (a + b + c)
    }
}
console.log(soma(1 , 2)(1))