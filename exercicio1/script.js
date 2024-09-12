let maisCoxinha=prompt('Quer mais uma coxinha? \n S: para sim \n N: para não').toUpperCase()
let conta=0
while(maisCoxinha!=='N'){
    conta=conta+2.5
    maisCoxinha = prompt('Quer mais uma coxinha? \n S: para sim \n N: para não').toUpperCase()
console.log(conta);
}
console.log(`O valor total da sua conta é de ${conta}`);
