/*
let coxinhas = prompt("Deseja comer mais coxinhas? \n1 - S \n2 - N").toUpperCase();

let conta = 0;

while(coxinhas !== "N"){
   conta = conta + 2.50;
   coxinhas = prompt("Deseja comer mais coxinhas? S para sim e N para não");
}
console.log(`O valor da sua conta é ${conta}`)
*/


let conta = 0;
while(prompt("Deseja comer mais coxinhas? \n1 - S \n2 - N").toUpperCase() === "S"){
conta += 2.50;
}
console.log(conta);









