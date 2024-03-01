const objeto = {
    listadenomes: ["Emily", "Vitória", "Ana"]

}
let maiornome = ""

for (let nome of objeto.listadenomes) {
    nomesSemEspaços = nome.replace(/\s/g,"")
    if (nome.length > maiornome.length){
        maiornome = nome
    }
}
console.log("Maior nome:" + maiornome)