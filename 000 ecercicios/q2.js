/* Os triângulos podem ser classificados em 3 tipos quanto ao tamanho de seus lados:
Equilátero: Os três lados são iguais. Isósceles: Dois lados iguais. Escaleno: Todos os lados são diferentes.
Crie uma função que recebe os comprimentos dos três lados de um triângulo e retorne sua classificação quanto
ao tamanho de seus lados. (Neste exemplo deve-se abstrair as condições matemáticas de existência de um
triângulo) */ 

const clasificationTriangle = (a , b ,c) =>{
    if(a === b && a === c)
        return 'equilátero'
    else if(a === b || a === c || b === a || b === c)
        return 'isósceles'
    else
        return 'escleno'
}


console.log(clasificationTriangle(1,1,1))
console.log(clasificationTriangle(1,1,2))
console.log(clasificationTriangle(1,2,3))