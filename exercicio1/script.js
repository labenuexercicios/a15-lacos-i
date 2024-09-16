/**
Exercício 1

Utilizando o laço while, escreva um código que recebe
 um prompt perguntando se a pessoa deseja comer mais 
coxinhas. “S” deve representar “sim”, e “N” deve representar 
“não”. Crie também uma let conta para guardar o 
valor total.

Toda vez que a resposta for sim, o laço deve se repetir,
e devemos adicionar R$2.50 ao valor total. Quando a 
resposta não for sim, devemos imprimir o valor total da conta.
 */

/**Usando el ciclo while, escriba código que reciba un aviso preguntando si la persona quiere comer más
coxinhas. "S" debe representar "sí" y "N" debe representar "no". También cree una cuenta let para guardar 
el
valor total.

Cada vez que la respuesta sea sí, el ciclo debe repetirse y debemos agregar R$ 2,50 al valor total. Cuando
a la respuesta no es sí, debemos imprimir el monto total de la cuenta. */

let conta = 0
while(prompt("voce deseja comer mais uma coxhinha S para sim N para nao".trim().toUpperCase) === "S"){
   conta = conta += 2.5
}
console.log(conta)