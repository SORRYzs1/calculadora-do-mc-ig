let conta= 0
let pessoas= 0

const contaInput =document.querySelector("#conta")
contaInput.addEventListener("input",receberValorConta )

function receberValorConta(evento) {
   conta = Number(evento.target.value)
   calcular
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

     calcular() 
}

const botoesgorjeta = document.querySelectorAll(".gorjeta input[type='number']")
botoesgorjeta.forEach(botao =>{
    botao.addEventListener("click", receberPorcentagem)
})

function receberPorcentagem(evento){
    botoesgorjeta.forEach(botao =>{
        botao.classList.remove("botao-ativo")

    if(botao.value === evento.target.value) {
        botao.classList.add("botao-ativo")
    }
})

if(evento.target.value !== "") {
    porcentagem = parseFloat(evento.target.value) / 100
}else {
    porcentagem =0
}

calcular()
}

const gorjetainput = document.querySelector("#outra")
gorjetainput.addEventListener("input", receberPorcentagem)

function calcular() {
    if(conta !== 0 && porcentagem !==0 && pessoas !== 0) {
        const stronggorjetatotal = document.querySelector(".gorjeta-total > strong")
        stronggorjetatotal.innerHTML = `R$ ${(conta * porcentagem / pessoas).toFixed(2)}`

        const strongtotal = document.querySelector(".total > strong")
        strongtotal.innerHTML = `R$ ${((conta + (conta * porcentagem)) / pessoas).toFixed(2)}`
    }
}

const botaolimpar = document.querySelector(".resultados button")
botaolimpar.addEventListener("click", limpar)

function limpar() {
    contaInput.value = ""

    botoesgorjeta.forEach(botao =>{
        botao.classList.remove("botao-atvo")
    })

    gorjetainput.value = ""

    pessoasinput.value = ""

    document.querySelector(".gorjeta-total > strong").innerHTML = "R$ 0.00"
    document.querySelector(".total > strong").innerHTML = "R$ 0.00"
}