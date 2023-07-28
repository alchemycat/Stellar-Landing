import * as flsFunctions from "./modules/functions.js";

document.addEventListener("DOMContentLoaded", () => {
	flsFunctions.isWebp();


	const burger = document.querySelector(".burger");

	burger.addEventListener("click", toggleBurger);

	function toggleBurger() {
		const overlay = document.querySelector(".overlay");
		if (JSON.parse(burger.getAttribute("aria-expanded"))) {
			overlay.classList.add("active");
		} else {
			overlay.classList.remove("active");
		}
	}
});