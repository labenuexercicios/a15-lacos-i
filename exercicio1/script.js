
let pergunta = prompt ("Você quer mais coxinha?");
let conta = 0;

while (pergunta === "S"){
    conta = conta + 2.50;
    pergunta = prompt ("Você quer mais coxinha?");
}

alert("Valor total R$ " + conta.toFixed(2))