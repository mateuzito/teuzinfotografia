/* Sidebar function */
function toggleNav() {

document.querySelector('.sidebar').classList.toggle('open');    
}
    
function closeNav() {
    
document.querySelector('.sidebar').classList.remove('open');    
}

/* Sidebar button rotation function */
var botoes =
document.querySelectorAll(".menu-btn");

botoes.forEach(function(botao) {
    botao.addEventListener("click", function() {
        botao.classList.add("rotacionado");

        setTimeout(function() {
            botao.classList.remove("rotacionado");
        }, 500);
    });
});

/* Image display function */
let imagemAtual = 1;
const totalImagens = 16;

function anterior() {
    if (imagemAtual > 1) {
        imagemAtual--;
    } else {
        imagemAtual = totalImagens;
    }
    atualizarImagem()
}

function proximo() {
    if (imagemAtual < totalImagens) {
        imagemAtual++;
    } else {
        imagemAtual = 1;
    }
    atualizarImagem();
}

function atualizarImagem() {
    for (let i = 1; i <= totalImagens; i++) {
        const imagem =
document.getElementById('imagem' + i);
        if (i === imagemAtual) {
            imagem.style.display = 'block';
        } else {
            imagem.style.display = 'none';
        }  
    }
}