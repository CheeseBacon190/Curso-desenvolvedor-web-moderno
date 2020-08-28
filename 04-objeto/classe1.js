class Lancamento {
    constructor(nome = 'Generico', valor = 0){
        this.nome = nome,
        this.valor = valor
    }
}


class CilcoFinaceiro{
    constructor(mes, ano){
        this.mes = mes,
        this.ano = ano,
        this.lancamentos = []
    }

    addLancamentos(...lancamentos){
            lancamentos.forEach(lancamento => {
                this.lancamentos.push(lancamento)
            })
    }

    sumario(){
        let valorConsolidado = 0
        this.lancamentos.forEach(lancamento => {
            valorConsolidado += lancamento.valor
        })
        return valorConsolidado
    }
}


const salario = new Lancamento('Salario', 45000)
const contaDeLuz = new Lancamento('Luz', -220)

const contas = new CilcoFinaceiro(6, 2020)
contas.addLancamentos(salario,contaDeLuz)

console.log(contas.sumario())