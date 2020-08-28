/* Elabore duas funções que recebem três parâmetros: capital inicial, taxa de juros e tempo de aplicação. A
primeira função retornará o montante da aplicação financeira sob o regime de juros simples e a segunda
retornará o valor da aplicação sob o regime de juros compostos. */

const calcAmount = (initialCapital, interestRate, time) => initialCapital * (1 + interestRate)** time

const aplicationValue = (initialCapital, interestRate , time) => {
    let m = calcAmount(initialCapital, interestRate, time)
    let rate =  m - initialCapital
   
    return rate + initialCapital
}


console.log(calcAmount(60, 0.03, 7))
console.log(aplicationValue(60, 0.03, 7))
