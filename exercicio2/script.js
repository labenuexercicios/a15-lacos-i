// Exercício 2

// Crie um programa que peça um input de número para o usuário. Com este número, o código deve imprimir a **tabuada** do número, de 1 a 10.

// Exemplo com entrada **`7`**:
// ```jsx

// FOR
/*for (inicialização de condição; condição de continuação; uma alteração) // condições separadas por ;
{um conjunto de ações}
for (let index = 0; index < array.length; index++) {
    const element = array[index];
    
}
*/

const numero=+prompt("Digite um número");

for(let i=1;i<=10; i++){
    console.log(numero*i);
}
