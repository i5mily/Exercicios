function nomes(array) {
    let listaDeNomes = []
    for (let i = 0; i < array.length; i++) {
        if(array[i].replace(/\s/g, '').length > 5){
            listaDeNomes.push(array[i])
        }
    }
    return listaDeNomes
}
const arrayOriginal = ["uva", "banana", "abacaxi"]
const arrayFiltrada = nomes (arrayOriginal);
console.log(arrayFiltrada);