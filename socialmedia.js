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