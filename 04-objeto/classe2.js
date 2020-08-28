class Avo {
    constructor(sobrenome){
        this.sobrenome = sobrenome
    }
}

// A classe Pai está Herdando atributos da classe Avo
class Pai extends Avo {
    constructor(sobrenome,prof = 'professor'){
        super(sobrenome)
        this.profissao = prof
    }
}

class Filho extends Pai {
    constructor(){
        super('Silva')
    }
}


const filho = new Filho
console.log(filho)