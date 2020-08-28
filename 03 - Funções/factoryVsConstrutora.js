// construtora
function Pessoa(nome,sobrenome,idade){
    this.nome = nome,
    this.sobrenome = sobrenome,
    this.idade = idade

    this.falar = () => console.log(`meu nome é ${this.nome} ${this.sobrenome} e tenho ${this.idade} anos`)
}

const p1 = new Pessoa('Gustavo', 'Reis', 20)
console.log(p1)
p1.falar()


// factory
// opte pela factory para evitar problemas com o this
const criarPessoa = (nome,sobrenome,idade) => {
    return {
        nome,
        sobrenome,
        idade,

        falar: () => console.log(`meu nome é ${nome} ${sobrenome} e tenho ${idade} anos`)
    }
}

const p2 = criarPessoa('Gustavo', 'Reis Silva', 21)
console.log(p2)
p2.falar()


