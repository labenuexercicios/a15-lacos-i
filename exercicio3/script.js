const maioresPaises = ["Rússia", "Canadá", "China", "EUA", "Brasil"]

function imprimirRanking (){
    console.log(maioresPaises)

    for (let i = 0; i < maioresPaises.length; i++){
        console.log(`${i + 1} - ${maioresPaises[i]}`)
    }
}
imprimirRanking()

