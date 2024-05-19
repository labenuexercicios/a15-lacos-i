// Resolução do Exercício 2

let num = Number(prompt("Digite o número da Tabuada que deseja saber"))
let Resultado

console.log (`Essa é a tabuada do ${num}`)
for (i=1; i<11; i++) {
    Resultado = i*num
    console.log (`${num} x ${i} = ${Resultado}`)
}