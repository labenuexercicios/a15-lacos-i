function precoCoxinhas(coxinhas){

coxinhas = prompt(`Quer comer coxinha?`)
const valor = 2.5
let conta = 0;
let qtde = 0

while(coxinhas.toUpperCase() === "S"){
    
    conta = conta + valor
    coxinhas = prompt(`Quer mais coxinhas?`)
    qtde++
}
console.log(`Você comeu ${qtde} coxinhas e sua conta deu ${conta.toLocaleString('pt-BR', {style:'currency', currency: 'BRL'})}`)
}

precoCoxinhas()