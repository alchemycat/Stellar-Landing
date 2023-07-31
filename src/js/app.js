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


	const slider = () => {
		new Swiper(".mySwiper", {
            slidesPerView: 'auto',
			freeMode: true,
            spaceBetween: 16,
            breakpoints: {
              320: {
                slidesPerView: 'auto',
                spaceBetween: 12,
              },
              575: {
                slidesPerView: 2,
                spaceBetween: 12,
              },
              768: {
                slidesPerView: 'auto',
                spaceBetween: 12,
              },
              992: {
                slidesPerView: 4,
                spaceBetween: 16,
              }
            },
        });

		new Swiper(".atmo__slider", {
			navigation: {
				nextEl: ".atmo__arrow-next",
				prevEl: ".atmo__arrow-prev",
			  },
		});
	}

	slider();

	const questions = () => {
		try {
			const e = document.querySelectorAll(".ques__question");
			e.forEach((e=>{
				e.addEventListener("click", (t=>{
					const c = e.querySelector(".ques__caption")
						, a = e.querySelector(".ques__top");
					e.classList.contains("collapsed") ? (e.classList.remove("active"),
					c.classList.remove("active"),
					a.classList.remove("active")) : (e.classList.add("active"),
					c.classList.add("active"),
					a.classList.add("active"))
				}
				))
			}
			)),
			e[0].click()
		} catch {}
	}

	questions();
});