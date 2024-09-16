let coxinhas =prompt(`Você deseja comer mais coxinhas?[S/N]`);
coxinhas.toLowerCase
let valor = 0
while(coxinhas=="s"){
valor+=2.5;
coxinhas =prompt(`Você deseja comer mais coxinhas?[S/N]`);
coxinhas.toLowerCase
}

console.log(`O valor total é R$:${valor}.`);
