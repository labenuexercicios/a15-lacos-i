var resposta
var conta = 0
while (resposta !== "N" ) {
    var resposta = prompt("você deseja comer? S/N?").toUpperCase()
    if (resposta == "S"){
        conta = (conta + 2.50)
    } 
    }
console.log(`aqui está o valor do almoço ${conta} reais`)