const sequencia = {
    _valor: 1, // convenção -> mostrar que os atributos com ' _ ' devem ser acessados apenas internamente
    get valor(){
        return this._valor++
    },
    set valor(valor){
        if(valor > this._valor )
            this._valor = valor
    }
}


// acessando os metodos
console.log(sequencia.valor, sequencia.valor, sequencia.valor)

sequencia.valor = 1000
console.log(sequencia.valor, sequencia.valor, sequencia.valor)