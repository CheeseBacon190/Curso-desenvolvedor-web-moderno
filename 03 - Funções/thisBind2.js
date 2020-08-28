function Pessoa(){
    this.idade = 0
    
    setInterval(() => {
        this.idade++
        console.log(this.idade)
    },1000) // Dispara uma função a partir de um intervalo determinado
}

new Pessoa