// # Exercício 3

// Crie um array com 5 strings. Faça um programa que percorra este array e imprima as strings em formato de ranking, como no exemplo abaixo:

// //entrada
// const maioresPaises = ["Rússia", "Canadá", "China", "EUA", "Brasil"]

// //saída
// "1 - Rússia"
// "2 - Canadá"
// "3 - China"
// "4 - EUA"
// "5 - Brasil"

const rankingBtWomen = ["Giulia Gasparri","Ninny Valentini","Rafaella Miiller","Patricia Diaz","Nicole Nobile"]

for(i=0; i<rankingBtWomen.length; i++){
    console.log(`"${i + 1} - ${rankingBtWomen[i]}"`);
}