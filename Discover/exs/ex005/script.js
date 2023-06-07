/*
Crie um algoritmo que transforme as notas do sistema
numérico para sistema de notas em caracteres tipo A B C

* de 90 para cima -   A
* entre 80 - 89   -   B
* entre 70 - 79   -   C
* entre 60 - 69   -   D
* menor que 60    -   F
*/

let score = 234
let scoreA = score >= 90 && score <= 100
let scoreB = score >= 80 && score <= 89
let scoreC = score >= 70 && score <= 79
let scoreD = score >= 60 && score <= 69
let scoreF = score >= 0 && score < 60



if (scoreA){
    console.log('A')
} else if (scoreB){
    console.log('B')
} else if (scoreC){
    console.log('C')
} else if (scoreD){
    console.log('D')
} else if (scoreD){
    console.log('F')
} else {
    console.log('NOTA INVÁLIDA!!')
}