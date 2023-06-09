const questoes = [
    "O que eu aprendi?",
    "O que me deixou aborrecido? E o que eu poderia fazer para melhorar?",
    "oque me deixou feliz?",
    "Quantas pessoas ajudei?"
]

const pergunta = (index = 0)=> {
    process.stdout.write('\n' + questoes[index] + ' > ')
}

pergunta()

const respostas = []

process.stdin.on("data", data => {
    respostas.push(data.toString().trim())
    if (respostas.length < questoes.length){
        pergunta(respostas.length)
    } else{
        console.log(respostas)
        process.exit()
    }
    
})