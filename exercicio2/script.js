// const numero = Number(prompt(`Insira um número: `))//Lembre do number!

//Criando dentro de função
const tabuada = (numero) => {

numero = prompt(`Insira o número: `)
for(let i = 1; i <= 10 ; i++){
    console.log(`Tabuada de ${numero} é - ${i} * ${numero} = ${numero*i} `)
}
}
tabuada()

