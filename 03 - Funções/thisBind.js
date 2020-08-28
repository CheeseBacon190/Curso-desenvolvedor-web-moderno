const pessoa = {
    saudacao: 'Bom dia',
    falar(){
        console.log(this.saudacao)
    }
}

pessoa.falar()


//maneira errada de armazenar um metodo em outra variavel
// Houve um erro com o this
/*const falar = pessoa.falar()
falar() // conflito entre os paradigas funcional e OO */


//maneira correta de armazenar um metodo em outra variavel
// o bind irá tratar o erro com this
const falar = pessoa.falar.bind(pessoa)
falar()



