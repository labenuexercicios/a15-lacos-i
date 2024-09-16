// # Exercício 3

// Crie um array com 5 strings. Faça um programa que percorra este array e imprima as strings em formato de ranking, como no exemplo abaixo:

// ```jsx
// //entrada
// const maioresPaises = ["Rússia", "Canadá", "China", "EUA", "Brasil"];

// //saída
// "1 - Rússia"
// "2 - Canadá"
// "3 - China"
// "4 - EUA"
// "5 - Brasil"

// FOR COM ARRAYS
// o i começa na posição 0, não só para números, porque como é array, vai pela posição do array

const melhoresJogosPs5=["God of War", "Uncharted", "The Last Of Us", "Call Of Duty Vanguard", "Elden Ring"]
let num = 1

for(i=0;i<melhoresJogosPs5.length;i++){
    console.log(`${i+1} - ${melhoresJogosPs5[i]}`);
}