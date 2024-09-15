let conta = 0

while (true) {
  let resposta = prompt("Deseja comer mais coxinhas? (S/N)")
  
  if (resposta.toUpperCase() === "S") {
    conta += 2.5;
  } else {
    break
  }
}

console.log("Valor total da conta: R$ " + conta.toFixed(2))