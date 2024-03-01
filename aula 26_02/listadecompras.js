let ListaDeCompras = {
    Produtos: {
        'Maça':8,
        'Uva':5,
        'Banana': 6
}
}
let soma = 0;
console.log(ListaDeCompras.Produtos.Maça)

for (let i in ListaDeCompras.Produtos){
    soma = soma +ListaDeCompras.Produtos [i]

}
console.log(soma)
let soma2 = 0
for(let compras of Object.values(ListaDeCompras.Produtos)){
    soma2 += compras
}
console.log (soma2)