/* Sidebar function */
document.addEventListener('DOMContentLoaded', function() {
    var sidebars = document.querySelectorAll('.sidebar');
    var overlays = document.querySelectorAll('.overlay');
    var menuBtns = document.querySelectorAll('.menu-btn');

    function openSidebar() {
        sidebars.forEach(function(sidebar) {
            sidebar.style.right = '0';
        });
        overlays.forEach(function(overlay) {
            overlay.style.display = 'block';
        });
    }

    function closeSidebar() {
        sidebars.forEach(function(sidebar) {
            sidebar.style.right = '-80%';
        });
        overlays.forEach(function(overlay) {
            overlay.style.display = 'none';
        });
    }

    function toggleSidebar() {
        sidebars.forEach(function(sidebar) {
            if (sidebar.style.right === '0px') {
                closeSidebar();
            } else {
                openSidebar();
            }
        });
    }

    menuBtns.forEach(function(menuBtn) {
        menuBtn.addEventListener('click', toggleSidebar);
    });

    overlays.forEach(function(overlay) {
        overlay.addEventListener('click', closeSidebar);
    });
});

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

/* Photo of the day function */
function showDailyImage() {
    const images = document.querySelectorAll('.dailyImage');
    const today = new Date();
    const startOfYear = new Date(today.getFullYear(), 0, 0);
    const diff = today - startOfYear;
    const oneDay = 1000 * 60 * 60 * 24;
    const dayOfYear = Math.floor(diff / oneDay);

    const imageIndex = dayOfYear % images.length;
    images.forEach((img, index) => {
        img.style.display = index === imageIndex ? 'block' : 'none';
    });
}

window.onload = showDailyImage;

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