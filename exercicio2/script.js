//
// Criando um prompt de comando para executar algum numero de 1 a 10.
// A o digitar o numero a formula será aplicada e feito o calculo da tabuada.
const tabuada = Number(prompt("Digite um numero"))

//Usando a formula i = 1; <= 10; i++)
// Lembre-se que essa tabuada é de 1 a 10, caso deseja alterar, adicionando mais numeros, altere a formula!

for(let i = 1; i <= 10; i++){

// Ao executar o console.log usamos templates, para fazer uma multiplicação de valores.

// Formas de executar outros sinais.

// console.log(`${i} +  ${tabuada}, Resultado = ${i+tabuada}`) = ADIÇÃO
// console.log(`${i} /  ${tabuada}, Resultado = ${i/tabuada}`) = DIVISÃO
// console.log(`${i} -  ${tabuada}, Resultado = ${i-tabuada}`) = SUBTRAÇÃO 
// console.log(`${i} %  ${tabuada}, Resultado = ${i%tabuada}`) = PORCENTAGEM

    console.log(`${i} *  ${tabuada}, Resultado = ${i*tabuada}`)
}
