let botao = document.querySelector("button");
botao.addEventListener("click",() ==> {
    let input = document.querySelector("input").value
    ParImpar(input)
})

let input = document.querySelector("input")
input.addEventListener("keypress", (event) => {
    if(event.key === "Enter"){
        let input = document.querySelector("input").value
        ParImpar(input)
    }
})

function ParImpar(){
        if(n% 2 === 0){
            document.write (`<h1>${n} é PAR </h1>`)
        } else {
            document.write (`<h1>${n} é IMPAR </h1>`)
        }
    }
    ParImpar(input)
}
//function Enviar (){
    //let input = document.querySelector ("input").value
    //function ParImpar(n){