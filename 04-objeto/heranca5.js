// Tudo é js é uma função por baixo dos panos
// Então todos tem um prototype
console.log(typeof String)
console.log(typeof Number)
console.log(typeof Array)
console.log(typeof Object)


// Colocar um metodo no prototipo do tipo de dado string
String.prototype.reverse = function() {
    return this.split('').reverse().join('')
}

console.log("gustavo reis".reverse())


// Colocar um metodo no prototipo do tipo de dado Array
Array.prototype.first = function () {
    return this[0]
}

console.log([1,2,3,4,5].first())
console.log(['a','b','c'].first())


// Sobreescrever metodos existentes nos prototypes
// não é uma boa ideia fazer , 
// pode ter efeitos colaterais imesuráveis
String.prototype.toString = function (){
    return 'Lascou tudo'
}

// irá reverter Lascou tudo
console.log("gustavo".reverse())