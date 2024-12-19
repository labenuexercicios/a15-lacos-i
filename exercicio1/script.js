let comerCoxinha = prompt("Deseja comer mais coxinha?/S/N")
let conta = 0
while(comerCoxinha.toUpperCase() ===`S`){
conta = conta + 2.50
console.log(`sua conta é de ${conta}`)
comerCoxinha = prompt("Deseja comer mais coxinha?/S/N")
}
console.log(`sua conta ficou ${conta}`)


