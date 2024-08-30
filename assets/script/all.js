const swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  slidesPerGroup: 1,
  spaceBetween: 48,
  breakpoints: {
    768: {
      slidesPerView: 2,
      slidesPerGroup: 2,
    },
  },
  navigation: {
    nextEl: ".swiper-next",
    prevEl: ".swiper-prev"
  },
  pagination: {
    el: ".swiper-pagination-custom",
    type: "fraction"
  }
});
const swiper2 = new Swiper(".mySwiper2", {
  slidesPerView: 3,
  slidesPerGroup: 2,
  spaceBetween: 24,
  navigation: {
    nextEl: ".swiper-next",
    prevEl: ".swiper-prev"
  },
  pagination: {
    el: ".swiper-pagination-custom",
    type: "fraction"
  }
});
var swiper3 = new Swiper(".mySwiper3", {});


var swiper4 = new Swiper(".mySwiper4", {});