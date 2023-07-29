import * as flsFunctions from "./modules/functions.js";

document.addEventListener("DOMContentLoaded", () => {
	flsFunctions.isWebp();


	const burger = document.querySelector(".burger");

	burger.addEventListener("click", toggleBurger);

	function toggleBurger() {
		const overlay = document.querySelector(".overlay");
		const header = document.querySelector(".header");
		const intro = document.querySelector(".intro");
		if (JSON.parse(burger.getAttribute("aria-expanded"))) {
			overlay.classList.add("active");
			header.classList.add("active");
			intro.classList.add("active");
		} else {
			overlay.classList.remove("active");
			header.classList.remove("active");
			intro.classList.remove("active");
		}
	}
});