let pergunta = prompt("Deseja comer uma coxinha?")
let valorgasto = 0

while(pergunta === "S"){
    valorgasto = valorgasto + 2.5
    pergunta = prompt("Deseja comer mais uma coxinha?")
    if(pergunta === "N"){
        break
    }
}

console.log(valorgasto)