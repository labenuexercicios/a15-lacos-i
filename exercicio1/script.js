// # Exercício 1

// Utilizando o laço `while`, escreva um código que recebe um `prompt` perguntando se a pessoa deseja comer mais coxinhas. “S” deve representar “sim”, e “N” deve representar “não”. Crie também uma `let conta` para guardar o valor total.

// Toda vez que a resposta for **sim**, o laço deve se repetir, e devemos adicionar R$2.50 ao valor total. Quando a resposta não for **sim**, devemos imprimir o valor total da conta.



let resposta = prompt("Deseja comer mais coxinhas? (S/N)");
let conta = 0;

while (resposta.toUpperCase() === "S") {
  conta = conta + 2.5;
  resposta = prompt("Deseja comer mais coxinhas? (S/N)");
}

console.log("O valor total da conta é: R$ " + conta.toFixed(2));



// Outra forma de resolver:

// let conta = 0

// while (true) {
//   let resposta = prompt("Deseja comer mais coxinhas? (S/N)");

//   if (resposta.toUpperCase() === "S") {
//     conta = conta + 2.5;
//   } else if (resposta.toUpperCase() === "N") {
//     break;
//   } else {
//     alert("Resposta inválida! Por favor, responda apenas com 'S' ou 'N'.");
//   }
// }

// alert("O valor total da conta é: R$ " + conta.toFixed(2));
