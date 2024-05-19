// Resolução do Exercício 3

const maioresTimes = ["Corinthians", "Flamengo", "Palmeiras", "Atlético Mineiro", "Internacional"]

console.log ("Os maiores times do Brasil são:")
for (i=0; i<maioresTimes.length; i++){
    console.log (`${i+1} - ${maioresTimes[i].toUpperCase()}`)
}
