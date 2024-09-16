
/*Jeito resolvido em aula

let numero = prompt('Digite um número:')
for(i=0;i<11;i++){
    console.log(numero*i)
}*/


// Jeito mais bonitinho
let valor = Number(prompt('Digite um valor'))
if(valor<=10){
    for(i=0; i <=10; i++){
        console.log(` ${valor} x ${i} = ${i*valor}`)
    }
    
}else{
    console.log('Digite um número valido.')
}