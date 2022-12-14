const tecnologias = [
    "java", "react", "node", "python", "php", "dotnet", "github", "ruby", "mysql", "JavaScrpit"
];

const palavraSecreta = tecnologias[Math.floor(Math.random() * tecnologias.length)];
const letrasErradas = [];
const letrasCorreta = [];

document.addEventListener("keydown", (evento) => {
    const codigo = evento.keyCode; // 65 ~ 90 (saber qual o código da letra o usuário clicou) 
    if(isLetra(codigo)) {
        const letra = evento.key; // Pegando a letra do código do keyboard 
        if (letrasErradas.includes(letra)) {
            monstrarAvisoLetraRepetida();
        } else {
            if (palavraSecreta.includes(letra)) {
                letrasCorreta.push(letra);
            } else {
                letrasErradas.push(letra);
            }
        }
        AtualizarJogo();
    }
})

function AtualizarJogo() {
    monstrarLetrasErradas();
    monstraLetrasCertas();
    desenharForca();
    checarJogo();
}

function monstrarLetrasErradas() {
    const div = document.querySelector(".letras-erradas-container");
    div.innerHTML = "<h3>Letras erradas</h3>";
    letrasErradas.forEach(letras => {
        div.innerHTML += `<span>${letras}</span>`;
    });
}

function monstraLetrasCertas() {
    const container = document.querySelector(".palavra-secreta-container");
    container.innerHTML = "";
    palavraSecreta.split("").forEach(letra => {
        if(letrasCorreta.includes(letra)) {
            container.innerHTML += `<span>${letra}</span>`;
        } else {
            container.innerHTML += `<span>_</span>`;
        }
    })
}

function checarJogo(){
    let mensagem = "";
    const container = document.querySelector(".palavra-secreta-container");
    const parteCorpo = document.querySelectorAll(".forca-parte");
    if(letrasErradas.length == parteCorpo.length) {
        mensagem = "Fim de Jogo! Você perdeu!"
    }

    if(palavraSecreta == container.innerText){
        mensagem = "Parabéns! Você ganhou !"
    }

    if(mensagem){
        document.querySelector("#mensagem").innerHTML = mensagem;
        document.querySelector(".popup-container").style.display = "flex";
    }
}

function desenharForca(){
    const parteCorpo = document.querySelectorAll(".forca-parte");
    for(let i = 0; i < letrasErradas.length; i++) {
        parteCorpo[i].style.display = "block";
    }
}

function monstrarAvisoLetraRepetida() {
    const aviso = document.querySelector(".aviso-palavra-repetida");
    aviso.classList.add("show");
    setTimeout(() => {
        aviso.classList.remove("show");
    }, 1000);
}

function isLetra (codigo) {
    return codigo >= 65 && codigo <= 90;
}

function reiniciarJogo(){
    window.location.reload();
}