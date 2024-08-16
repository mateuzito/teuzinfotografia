// Sidebar function
document.addEventListener("DOMContentLoaded", function () {
	var sidebar = document.querySelectorAll(".sidebar");
	var overlay = document.querySelectorAll(".overlay");
	var menuBtn = document.querySelectorAll(".menu-btn");

	function openSidebar() {
		sidebar.forEach(function (sidebar) {
			sidebar.style.right = "0";
		});
		overlay.forEach(function (overlay) {
			overlay.style.display = "block";
		});
	}

	function closeSidebar() {
		sidebar.forEach(function (sidebar) {
			sidebar.style.right = "-80%";
		});
		overlay.forEach(function (overlay) {
			overlay.style.display = "none";
		});
	}

	function toggleSidebar() {
		sidebar.forEach(function (sidebar) {
			if (sidebar.style.right === "0px") {
				closeSidebar();
			} else {
				openSidebar();
			}
		});
	}

	menuBtn.forEach(function (menuBtn) {
		menuBtn.addEventListener("click", toggleSidebar);
	});

	overlay.forEach(function (overlay) {
		overlay.addEventListener("click", closeSidebar);
	});
});

// Sidebar button rotation function
var botoes = document.querySelectorAll(".menu-btn");

botoes.forEach(function (botao) {
	botao.addEventListener("click", function () {
		botao.classList.add("rotate-button");

		setTimeout(function () {
			botao.classList.remove("rotate-button");
		}, 500);
	});
});

// Onload function
window.onload = function () {
	showDailyImage();
};

// Photo of the day function
function showDailyImage() {
	const loader = document.querySelector(".loader");
	loader.style.display = "block";
	const images = document.querySelectorAll(".dailyImage");
	const today = new Date();
	const startOfYear = new Date(today.getFullYear(), 0, 0);
	const diff = today - startOfYear;
	const oneDay = 1000 * 60 * 60 * 24;
	const dayOfYear = Math.floor(diff / oneDay);

	const imageIndex = dayOfYear % images.length;
	images.forEach((img, index) => {
		img.style.display = "none";
	});

	images[imageIndex].style.display = "block";
	images[imageIndex].onload = function () {
		loader.style.display = "none";
	};

	if (images[imageIndex].complete) {
		loader.style.display = "none";
	}
}

// Image display function
let imagemAtual = 1;
const totalImagens = 16;

function anterior() {
	if (imagemAtual > 1) {
		imagemAtual--;
	} else {
		imagemAtual = totalImagens;
	}
	atualizarImagem();
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
		const imagem = document.getElementById("imagem" + i);
		if (i === imagemAtual) {
			imagem.style.display = "block";
		} else {
			imagem.style.display = "none";
		}
	}
}

const scrollToTopBtn = document.getElementById("scrollToTopBtn");
const scrollTriggerHeight = 300;

window.addEventListener("scroll", () => {
	if (
		document.body.scrollTop > scrollTriggerHeight ||
		document.documentElement.scrollTop > scrollTriggerHeight
	) {
		scrollToTopBtn.style.display = "block";
	} else {
		scrollToTopBtn.style.display = "none";
	}
});

scrollToTopBtn.addEventListener("click", () => {
	document.body.scrollTop = 0;
	document.documentElement.scrollTop = 0;
});
