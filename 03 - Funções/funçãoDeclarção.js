// function declaration => pode ser chamada antes da declaração
console.log(soma(3,2))
function soma(a,b){
    return a + b
}

// function expression
const sub = function(a,b){
    return a - b
}

// named function expressed
const mult = function mult(a,b){
    return a * b 
}