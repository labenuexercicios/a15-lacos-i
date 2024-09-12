let resposta = prompt("Deseja comer mais coxinhas?\nDigite \'S\' para sim e \'N\' para não.").toUpperCase()
let total = 0



while(resposta==="S"){
    total = total + 2.5
    resposta = prompt("Deseja comer mais coxinhas?\nDigite \'S\' para sim e \'N\' para não.").toUpperCase()
}



console.log(`O total final da sua conta é R$ ${total}`)