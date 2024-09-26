// O prompt serve para mostrar o texto que o comando quer executar;

// Ultilizamos o (topUpperCase) para não interferir se a letra e maiscula ou minuscula.
let perguntaS = prompt('Você que mais coxinha ? digite "S" para sim e "N" para não').toUpperCase();
let conta = 0;

//Estritamente igual (===)	Retorna verdadeiro caso os operandos sejam iguais e do mesmo tipo.
while(perguntaS === "S"){
 //Atribuição de adição	x += y
    conta += 2.50
    perguntaS = prompt('Você que mais coxinha ? digite "S" para sim e "N" para não').toUpperCase();
}
// Fizemos um console.log de (Template) para strings, que facilitaria o entender do codigo.
// E com o (\n) que significa quebra de texto.
console.log(`O total da sua compra é ${conta}, \n Nossa, voce comeu bastante coxinha`)
