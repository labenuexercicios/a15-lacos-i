// Resolução do Exercício 1

let querCoxinha = prompt("Você deseja mais uma Coxinha?\n\"S\" - Sim\n\"N\" - Não").toUpperCase()

let conta = 0

while (querCoxinha === "S"){
    conta += 2.50
    querCoxinha = prompt("Você deseja mais uma Coxinha?\n\"S\" - Sim\n\"N\" - Não").toUpperCase()
}
alert (`O valor total da conta é: ${conta}`)