let conta= 0
let pessoas= 0

const contaInput =document.querySelector("#conta")
contaInput.addEventListener("input",receberValorConta )

function receberValorConta(evento) {
   conta = Number(evento.target.value)
}

const pessoasinput = document.querySelector("#pessoas")
pessoasinput.addEventListener("input", receberQuantidadePessoas)

function receberQuantidadePessoas(evento) {
    const paragrafoErro = document.querySelector(".pessoas #erro")
    const divErro = document.querySelector(".pessoas .input-box")
     if(evento.target.value === "0") {
        paragrafoErro.style.display = "block"
        divErro.setAttribute("id", "erro-div")
     } else {
        paragrafoErro.style.display = "none"
        divErro.setAttribute("id", "")
        pessoas = Number(evento.target.value)
     }
}

const botoesgorjeta = document.querySelectorAll(".gorjeta input[type='number']")
botoesgorjeta.forEach