/*
Crie um objeto que possuirá 2 propriedades, ambas do tipo array:
    * receitas: [] 
    * despesas: []
Agora, crie uma função que irá calcular o total de receitas e 
despesas e irá mostrar uma mensagem se a família está com 
saldo positivo ou negativo, seguido do valor do saldo.
*/

let familia = {
    salario: [2500, 1500, 1150.50],
    despesas: [2342.45, 700, 1200, 87.54]
}

function soma(array){
    let total = 0;

    for(let valor of array){
        total += valor
    }

    return total
}

function controleFinanceiro() {
    const calculoSalario = soma(familia.salario)
    const calculoDespesas = soma(familia.despesas)

    const total = calculoSalario - calculoDespesas

    let mensagem = 'negativo'

    if (total >= 0){
        mensagem = 'positivo'
    }

    console.log(`seu saldo é ${mensagem}: $${total.toFixed(2)}`)
}

controleFinanceiro()