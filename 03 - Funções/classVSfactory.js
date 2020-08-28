 // classe
class Pessoa{
    constructor(nome,sobrenome){
        this.nome = nome,
        this.sobrenome = sobrenome
    }

    falar(){
        console.log(`Meu nome é ${this.nome} ${this.sobrenome}`)
    }

}

const pessoa1 = new Pessoa("Gustavo", "Reis")
console.log(pessoa1)
pessoa1.falar()


// Factory 
// Optar na maioria das vezes a função factory , pois ela trata erros com this
const criarPessoa = (nome, sobrenome) => {
    return {
        nome,
        sobrenome,
        falar: () => console.log(`Meu nome é ${nome} ${sobrenome}`)
    }  
}

const pessoa2 = criarPessoa('Gustavo', 'Reis Silva')
console.log(pessoa2)
pessoa2.falar()