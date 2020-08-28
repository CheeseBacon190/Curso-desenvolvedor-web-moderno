function Aula(nome, videoID) {
    this.nome = nome
    this.videoID = videoID
}


const aula1 = new Aula("Bem Vindo", 123)
const aula2 = new Aula("Até logo", 456)

console.log(aula1,"\n",aula2)


// SIMULANDO O OPERADOR NEW
function novo(func, ...params){
    const obj = {}
    obj.__proto__ = func.prototype
    func.apply(obj, params)
    return obj
}

const aula3 = novo(Aula, "Bem vindo a Aula 3", 1234)
const aula4 = novo(Aula, "Bem vindo a Aula 4", 5674)

console.log(aula3,"\n",aula4)