import * as flsFunctions from "./modules/functions.js";

document.addEventListener("DOMContentLoaded", () => {
	flsFunctions.isWebp();


	const burger = document.querySelector(".burger");

	burger.addEventListener("click", toggleBurger);

	function toggleBurger() {
		const overlay = document.querySelector(".overlay");
		const intro = document.querySelector(".intro");
		const burger = document.querySelector(".burger");
		if (JSON.parse(burger.getAttribute("aria-expanded"))) {
			overlay.classList.add("active");
			intro.classList.add("active");
			burger.classList.add("active");
		} else {
			overlay.classList.remove("active");
			intro.classList.remove("active");
			burger.classList.remove("active");
		}
	}
});