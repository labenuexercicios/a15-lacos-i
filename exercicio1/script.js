
let dadoInput = (prompt("Você quer comer mais coxinhas? S / N, cada coxinha custa 2,50"))
let somar = 0

while(dadoInput.toUpperCase()==="S"){
    somar = somar + 2.50
    dadoInput = (prompt("Você quer comer mais coxinhas? S / N, cada coxinha custa 2,50"))

}
console.log(somar);
