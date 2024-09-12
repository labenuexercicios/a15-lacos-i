let num = Number(prompt("Digite numeiro"))
let num1 = Number(prompt("Digite um limitador na tabuada"  ))
for( let i=0 ;i<num1;i++){ 
    calculo = num*i
    console.log(`Tabauda de ${num} é ${num} x ${i} = ${calculo}`)
}