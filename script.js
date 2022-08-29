const tecnologias = [
    "java", "react", "node", "python", "php"
];

const palavraSecreta = tecnologias[Math.floor(Math.random() * tecnologias.length)];

document.addEventListener("keydown", (evento) => {
    const codigo = evento.keyCode; // 65 ~ 90 (saber qual o código da letra o usuário clicou) 
    if(isLetra(codigo)) {
        const letra = evento.key; // Pegando a letra do código do keyboard 
    }
})

function isLetra (codigo) {
    return codigo >= 65 && codigo <= 90;
}