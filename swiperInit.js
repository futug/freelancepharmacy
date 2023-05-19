let fired = false;

window.addEventListener("scroll", () => {
  if (fired === false) {
    fired = true;

    setTimeout(() => {
      const swiper = new Swiper(".swiper", {
        slidesPerView: 4,

        spaceBetween: 0,
        centeredSlides: true,
        // Optional parameters
        direction: "horizontal",
        loop: true,

        // If we need pagination
        pagination: {
          el: ".swiper-pagination",
        },

        // Navigation arrows
        navigation: {
          nextEl: ".next-slide",
          prevEl: ".prev-slide",
        },

        // And if we need scrollbar
        scrollbar: {
          el: ".swiper-scrollbar",
        },
        breakpoints: {
          1200: {
            slidesPerView: 3,
            spaceBetween: 0,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 0,
          },
          320: {
            slidesPerView: 1,
            spaceBetween: 0,
            centeredSlides: true,
          },
        },
      });
    }, 1000);
  }
});
