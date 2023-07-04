// https://swiperjs.com/swiper-api#parallax
const mainSlide = new Swiper("#main-slide", {
  parallax: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    // 원에서 숫자로 변경
    type: "fraction",
    // 클릭하면 해당 페이지로 이동
    // clickable: true,
  },
  // 마지막 페이지에서 다시 첫번째 페이지로 돌아감
  loop: true,
  autoplay: {
    delay: 2000,
  },
});
