// clearTimeout vai cancelar um timeOut

const timeOut = 3000
const finisehd = () => console.log('done!')

let timer = setTimeout(finisehd, timeOut)
clearTimeout(timer)