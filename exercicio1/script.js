// # Exercício 1

// Utilizando o laço `while`, escreva um código que recebe um `prompt` perguntando se a pessoa deseja comer mais coxinhas. “S” deve representar “sim”, e “N” deve representar “não”. Crie também uma `let conta` para guardar o valor total.

// Toda vez que a resposta for **sim**, o laço deve se repetir, e devemos adicionar R$2.50 ao valor total. Quando a resposta não for **sim**, devemos imprimir o valor total da conta.

let pergunta = prompt("Deseja comer mais coxinhas ?\nS: Para Sim\nN: Para Não")
let conta = 0
while(pergunta === "S"){
    conta = conta+1
        pergunta = prompt("Deseja comer mais coxinhas ?\nS: Para Sim\nN: Para Não")
}
console.log(conta*2.5)