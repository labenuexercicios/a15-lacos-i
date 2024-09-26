// Utilizando o laço `while`, escreva um código que recebe um `prompt` perguntando se a pessoa deseja comer mais coxinhas. “S” deve representar “sim”, e “N” deve representar “não”. Crie também uma `let conta` para guardar o valor total.
let conta = 0;
let coxinha = "S"
let coxinhaUnidade = 0

while (coxinha === "S"){
    coxinha = prompt('Deseja comer mais coxinhas? \nDigite \"Sim\" para mais uma e qualquer outra letra para pedir a Conta').toUpperCase()
    console.log('+R$2.50')
    conta += 2.50
    coxinhaUnidade += 1
}
console.log(`Você comeu ${coxinhaUnidade} coxinhas. A sua conta ficou em ${conta} reais`)

// Toda vez que a resposta for *sim, o laço deve se repetir, e devemos adicionar R$2.50 ao valor total. Quando a resposta não for **sim*, devemos imprimir o valor total da conta.

