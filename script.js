// Checking valid routes
const validRoutes = ["/", "/about/", "/socialmedia/"];
const currentRoute = window.location.pathname;

if (!validRoutes.includes(currentRoute)) {
	window.location.href = "/404.html";
}

// Sidebar function
document.addEventListener("DOMContentLoaded", function () {
	let sidebar = document.querySelectorAll(".sidebar");
	let overlay = document.querySelectorAll(".overlay");
	let menuBtn = document.querySelectorAll(".menu-btn");

	function handleResize() {
		if (window.innerWidth >= 1200) {
			// Ensure the sidebar is closed and the menu button hidden on large screens
			closeSidebar();
		}
	}

	function openSidebar() {
		if (window.innerWidth < 1200) {
			// Opens only if the screen is smaller than 1200px
			sidebar.forEach(function (sidebar) {
				sidebar.style.right = "0";
			});
			overlay.forEach(function (overlay) {
				overlay.style.display = "block";
			});
		}
	}

	function closeSidebar() {
		sidebar.forEach(function (sidebar) {
			sidebar.style.right = "-80%";
		});
		overlay.forEach(function (overlay) {
			overlay.style.display = "none";
		});
	}

	menuBtn.forEach(function (menuBtn) {
		menuBtn.addEventListener("click", openSidebar);
	});

	overlay.forEach(function (overlay) {
		overlay.addEventListener("click", closeSidebar);
	});

	// Handle window resizing
	window.addEventListener("resize", handleResize);
});

// Sidebar button rotation function
let button = document.querySelectorAll(".menu-btn");

button.forEach(function (rotateBtn) {
	rotateBtn.addEventListener("click", function () {
		rotateBtn.classList.add("rotate-button");

		setTimeout(function () {
			rotateBtn.classList.remove("rotate-button");
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
const totalImagens = 23;

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

// Top button
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
