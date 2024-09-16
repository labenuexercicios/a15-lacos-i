/**
 * Exercício 2

Crie um programa que peça um input de número para o
 usuário. Com este número, o código deve imprimir a
  tabuada do número, de 1 a 10.

Exemplo com entrada 7:

7
14
21
28
35
42
49
56
63
70
 */

const meuArray = [7,14,21,28,35,42,49,56,63,70];

for(let i = 0; i < meuArray.length; i++){ //usando o .length ao invés de 5, que é o número de itens do array)
  console.log(meuArray[i])
}