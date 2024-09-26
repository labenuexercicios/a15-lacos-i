function tabuada() {
    let num = prompt("Digite um número para ver a tabuada:");
    
    for (let i = 0; i <= 10; i++) {
        let resultado = num*i
      
        console.log(`${num} x ${i} = ${resultado}`);
    }
  }
  tabuada()