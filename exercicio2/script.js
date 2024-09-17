// # Exercício 2

// Crie um programa que peça um input de número para o usuário. Com este número, o código deve imprimir a **tabuada** do número, de 1 a 10.

// Exemplo com entrada **`7`**:
// ```jsx
// 7
// 14
// 21
// 28
// 35
// 42
// 49
// 56
// 63
// 70
// ```

const numeros = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let num = +prompt("Escolha um número para gerar a tabuada de 0 a 10")
for(let i = 0; i < numeros.length; i++) {
  console.log(numeros[i],'*',num,'=',numeros[i]*num);
}