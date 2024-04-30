/* Sidebar function */
document.addEventListener("DOMContentLoaded", function () {
	var sidebars = document.querySelectorAll(".sidebar");
	var overlays = document.querySelectorAll(".overlay");
	var menuBtns = document.querySelectorAll(".menu-btn");

	function openSidebar() {
		sidebars.forEach(function (sidebar) {
			sidebar.style.right = "0";
		});
		overlays.forEach(function (overlay) {
			overlay.style.display = "block";
		});
	}

	function closeSidebar() {
		sidebars.forEach(function (sidebar) {
			sidebar.style.right = "-80%";
		});
		overlays.forEach(function (overlay) {
			overlay.style.display = "none";
		});
	}

	function toggleSidebar() {
		sidebars.forEach(function (sidebar) {
			if (sidebar.style.right === "0px") {
				closeSidebar();
			} else {
				openSidebar();
			}
		});
	}

	menuBtns.forEach(function (menuBtn) {
		menuBtn.addEventListener("click", toggleSidebar);
	});

	overlays.forEach(function (overlay) {
		overlay.addEventListener("click", closeSidebar);
	});
});

/* Sidebar button rotation function */
var botoes = document.querySelectorAll(".menu-btn");

botoes.forEach(function (botao) {
	botao.addEventListener("click", function () {
		botao.classList.add("rotacionado");

		setTimeout(function () {
			botao.classList.remove("rotacionado");
		}, 500);
	});
});
