// perguntando se gosta de coxinha
let conta = 0
 
coxinha = prompt(`deseja comer coxinha? \n S: Sim \n N: Nao`).toUpperCase()
 while (coxinha !== "N") {
    conta = conta + 2.50
    coxinha = prompt(`deseja comer coxinha? \n S: Sim \n N: Nao`).toUpperCase()
    console.log(`conta no momento ${conta}`)
 }
 console.log(`conta finalizada ${conta}`)
 
 