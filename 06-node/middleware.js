// middleware pattern

const passo1 = (ctx, next) => {
    ctx.valor1 = 'mid1'
    next()
}

const passo2 = (ctx, next) => {
    ctx.valor2 = 'mid2'
    next()
}

const passo3 = ctx => ctx.valor3 = 'mid3'

// executar os passos
const executar = (ctx, ...middlewares) => {
    const execPassos = indice => {
        middlewares && indice < middlewares.length &&
            middlewares[indice](ctx, () => execPassos(indice + 1))
    }
    execPassos(0) 
}


const contexto = {}

executar(contexto, passo1, passo2, passo3)
console.log(contexto)