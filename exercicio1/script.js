
let pergunta = prompt('deseja comer mais coxinha s ou n').toLowerCase()
let soma = 0;
let coxinha = 0;

while (pergunta === 's'){
    pergunta = prompt('deseja comer mais coxinha s ou n').toLowerCase()
    soma = soma + 2.50
    coxinha = coxinha + 1
}
console.log(`Você comeu ${coxinha} coxinhas e vai pagar o total de ${soma} reais`)