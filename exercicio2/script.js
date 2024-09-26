/* # Exercício 2

Crie um programa que peça um input de número para o usuário. Com este número, o código deve imprimir a **tabuada** do número, de 1 a 10.
 */


let tabuada = +prompt("Digite um n° de 1 a 10 e darei a tabuada dele")

for (let i=1; i<=10 ; i++){
    console.log(`${tabuada*i}`)
}
