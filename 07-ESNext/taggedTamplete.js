// tagged tamplet - processa template em uma function

const tag = (partes, ...valores) => {
    console.log(partes)
    console.log(valores)
    return 'Outra string'
}

const aluno = 'Gui'
const situacao = 'aprovado'

console.log(tag `${aluno} esta ${situacao}`)