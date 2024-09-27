// Crie um programa que peça um input de número para o usuário. Com este número, o código deve imprimir a **tabuada** do número, de 1 a 10.

// Exemplo com entrada **`7`**:

let numeroTabuada = +prompt("Digite o numero que deseja fazer a tabuada.")
for(let i=1; i<=10;i++){
    console.log(`${numeroTabuada} x ${i} = ${numeroTabuada*i}`)
}