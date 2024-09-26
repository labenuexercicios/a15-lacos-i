
let conta= 2.50
let contaCoxinhas= 1
resposta =prompt('Quer comer mais coxinhas?')   

while(resposta==='s'){
    resposta =prompt('Quer comer mais coxinhas?')
    conta+=2.50
    contaCoxinhas+=1
}console.log('conta total=', conta, ' reais')
console.log('numero de coxinhas ', contaCoxinhas)
