function comerCoxinha(){
let resposta = "SIM"
let conta = 5

while(resposta == "SIM") {
    resposta = prompt((`Deseja comer mais coxinha?`)).toUpperCase()
    
    if(resposta == "SIM"){
        conta += 2.5
        console.log(conta)
    }else {
        console.log(`Valor total da conta R$${conta}`)
    }
   }

}
comerCoxinha()