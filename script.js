/* Sidebar function */
function toggleNav() {

document.querySelector('.sidebar').classList.toggle('open');    
}
    
function closeNav() {
    
document.querySelector('.sidebar').classList.remove('open');    
}

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