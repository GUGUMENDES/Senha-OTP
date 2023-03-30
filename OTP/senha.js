const senhaElemento = document.querySelector("div.gerador-senha p")
const btnGerarSenha = document.querySelector("div.gerador-senha button")
const carateres = [ "0", "1", "2", "3", "4", "5", "6", "7", "8", "9" ]
let senha , intervalo

const geradorSenha = ()=>{

    senhaElemento.textContent = "" 

    for(let i = 1; i <= 6; i++){
        senha += [Math.floor(Math.random() * carateres.length)]
    }

    senhaElemento.textContent = senha

    senha = ""
}

const efeitoGeradorSenha = (btn, loop, tempo)=>{
    intervalo = setInterval(() => {
        geradorSenha()
    }, loop)

    setTimeout(() => {
        clearInterval(intervalo)
        btn.removeAttribute("disabled")
    }, loop * tempo)
}

btnGerarSenha.onclick = ()=>{
    btnGerarSenha.setAttribute("disabled", "true")
    efeitoGeradorSenha(btnGerarSenha, 50, 12)
}

senhaElemento.onclick = ()=>{
    navigator.clipboard.writeText(senhaElemento.textContent)
    senhaElemento.classList.add("copiada")

    setTimeout(()=>{
        senhaElemento.classList.remove("copiada")
    }, 2000)
}