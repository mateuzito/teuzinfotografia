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
	checkImagesLoaded();
};

// Photo of the day function
function showDailyImage() {
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
}

// Check if all images are loaded
function checkImagesLoaded() {
	const images = document.querySelectorAll("img");
	let loadedImagesCount = 0;

	images.forEach((img) => {
		if (img.complete) {
			loadedImagesCount++;
		} else {
			img.onload = () => {
				loadedImagesCount++;
				if (loadedImagesCount === images.length) {
					hideLoader();
				}
			};
		}
	});

	if (loadedImagesCount === images.length) {
		hideLoader();
	}
}

// Hide the loader
function hideLoader() {
	const loader = document.getElementById("page-loader");
	if (loader) {
		loader.style.display = "none";
		document.body.classList.remove("no-scroll");
		document.body.classList.add("loaded");
		triggerAnimations();
	}
}

// Trigger animations
function triggerAnimations() {
	const h1 = document.querySelector("h1");
	const h2 = document.querySelector("h2");
	const image = document.querySelector("img");

	if (h1) {
		h1.style.animation = "animation-h1 1s ease-in";
	}

	if (h2) {
		h2.style.animation = "animation-h2 1s ease-in";
	}

	if (image) {
		image.style.animation = "fade-in 1s ease-out";
	}
}

// Image display function
let imagemAtual = 1;
const imagens = document.querySelectorAll("[id^='imagem']");
const totalImagens = imagens.length;

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
	imagens.forEach((imagem, index) => {
		if (index + 1 === imagemAtual) {
			imagem.style.display = "block";
		} else {
			imagem.style.display = "none";
		}
	});
}

atualizarImagem();

// Função para abrir o lightbox com a imagem atualmente visível
function openLightbox(imageElement) {
	const lightbox = document.getElementById("lightbox");
	const lightboxImg = document.getElementById("lightbox-img");

	if (imageElement && imageElement.src) {
		lightboxImg.src = imageElement.src;
		lightbox.style.display = "flex"; // Exibe o lightbox

		document.body.classList.add("no-scroll");
	}
}

function closeLightbox() {
	const lightbox = document.getElementById("lightbox");
	lightbox.style.display = "none"; // Oculta o lightbox

	document.body.classList.remove("no-scroll");
}

// Top button
const scrollToTopBtn = document.getElementById("scrollToTopBtn");
const scrollTriggerHeight = 300;

window.addEventListener("scroll", () => {
	if (
		document.body.scrollTop > scrollTriggerHeight ||
		document.documentElement.scrollTop > scrollTriggerHeight
	) {
		scrollToTopBtn.style.display = "flex";
	} else {
		scrollToTopBtn.style.display = "none";
	}
});

scrollToTopBtn.addEventListener("click", () => {
	document.body.scrollTop = 0;
	document.documentElement.scrollTop = 0;
});
