let coxinha = prompt("Quer uma coxinha? S/N")
let conta = 0
const valor = 2.5

while (coxinha === "s"){
     coxinha = prompt("Quer outra coxinha? S/N");
     conta = conta + valor;

    if(coxinha === "n"){

        console.log("Sua conta foi fechada");
    };
 };
 console.log(`O total da conta é ${conta}.`);