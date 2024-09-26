//EXERCÍCIO 1 - LAÇOS
let coxinhas = prompt('Você deseja comer uma coxinha?\n Digite "S" para Sim\n Digite "N" para Não').toUpperCase()

let conta = 0

while(coxinhas === "S"){
    conta += 2.50
    coxinhas = prompt('Você deseja comer outra coxinha?\n Digite "S" para Sim\n Digite "N" para Não').toUpperCase()
}
console.log(`o valor da sua conta é: ${conta}.`)

