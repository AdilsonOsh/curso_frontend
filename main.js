const form = document.getElementById("numform");

let campoA = document.getElementById("campoa");
let campoB = document.getElementById("campob");

form.addEventListener("submit", function(e){
    e.preventDefault();

const msgResposta = document.getElementById("msg-resposta")
const mensagemA = 'O Valor está incorreto'
const mensagemB = 'O Valor está correto'
    if(campoB.value > campoA.value) {
        msgResposta.innerHTML= mensagemB;
        msgResposta.style.display = "block";
    }
    else {
        msgResposta.innerHTML= mensagemA;
        msgResposta.style.display = "block";
    }
})