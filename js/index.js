document.addEventListener("DOMContentLoaded", function () {

  const swiper = new Swiper('.swiper', {
    loop: true,
    spaceBetween: 24,
    slidesPerView: 1.4,
    breakpoints: {
      375: { slidesPerView: 3 }
    }
  });
})
