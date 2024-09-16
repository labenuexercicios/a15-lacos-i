do {
    console.log(`-------Tabuada---------`);
    let numero = Number(prompt(`Digite um numero que você deseja ver a tabuadas:`));
    for (let i = 0; i <= 10; i++) {
        console.log(`${i}x${numero}=${i * numero}`);
    }
    let finalizar = confirm(`Gostaria de fazer outra tabuada?`)
    if (finalizar == false) {
        break
    }


} while (true)
console.log(`Obrigado por usar nosso aplicativo!`)