let escolha;
let i = 0;
while (escolha != 'N') {
    escolha = prompt('Deseja comer mais coxinhas? S - Sim, N - Não').toUpperCase();
    i ++;
};

alert(`Valor total da compra: R$ ${i * 2.50}`);
