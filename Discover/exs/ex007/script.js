/*
    C = (F - 32) * 5/9 
    F = C * 9/5 + 32
*/

let tipo = 'F'
let valor = 67


if (tipo == 'C'){
    let calculo = (valor - 32) * 5/9
    console.log(`${valor}° fahrenheit = ${calculo.toFixed(3)}° celsius`)
} else if (tipo == 'F'){
    let calculo = valor * 9/5 + 32
    console.log(`${valor}° celsius = ${calculo.toFixed(3)}° fahrenheit`)
} else{
    console.log('ERRO - selecione no campo (tipo) F ou C')
}
