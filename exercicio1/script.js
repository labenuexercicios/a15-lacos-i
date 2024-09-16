let coxinha = prompt('Deseja comer uma coxinha?\nDigite "S" para sim.\nDigite "N" para não.').toLocaleLowerCase()
let conta = 0
let quantidade = 0

while(coxinha !== 'n' || coxinha === 's'){
    coxinha === 's' ? conta += 2.5 : alert('Dígito inválido.')
    coxinha === 's' ? quantidade += 1 : ''
    coxinha = prompt('Deseja comer mais uma coxinha?\nDigite "S" para sim.\nDigite "N" para não.').toLocaleLowerCase()
}
alert(`Você consumiu ${quantidade} coxinha(s) e deve pagar ${conta} reais.`)