/* Sidebar function */
document.addEventListener("DOMContentLoaded", function () {
	var sidebar = document.querySelectorAll(".sidebar");
	var overlay = document.querySelectorAll(".overlay");
	var menuBtn = document.querySelectorAll(".menu-btn");

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

/* Sidebar button rotation function */
var button = document.querySelectorAll(".menu-btn");

button.forEach(function (rotateBtn) {
	rotateBtn.addEventListener("click", function () {
		rotateBtn.classList.add("rotate-button");

		setTimeout(function () {
			rotateBtn.classList.remove("rotate-button");
		}, 500);
	});
});
