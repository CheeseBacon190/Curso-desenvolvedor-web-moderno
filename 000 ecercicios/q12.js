// Faça um algoritmo que calcule o fatorial de um número.


const factorial = n => (n === 0) ? 1 : n * factorial(n - 1)
   
for(let i = 0; i < 100; i++)
    console.log(`The factorial of ${i} is ${factorial(i)}`)