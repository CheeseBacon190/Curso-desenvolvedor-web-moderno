// estratégia 1 para gerar valores padrão
const soma1 = (a, b ,c) => {
    a = a || 1
    b = b || 1
    c = c || 1

    return a + b + c
}

// estratégia 2 para gerar valores padrão
// melhor forma
const soma2 = (a=1, b=1, c=1) => { 
    return a + b + c
}

console.log("estratégia 1")
console.log(soma1(), soma1(3), soma1(1,2,2))

console.log("estratégia 2")
console.log(soma2(), soma2(3), soma2(1,2,2))
