export default function slider() {
	try {
        new Swiper(".mySwiper", {
            slidesPerView: 4,
            loop: true,
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
	} catch {}
}