const main = document.querySelector("main");
const nav = document.querySelector("nav");
const footer = document.querySelector("footer");
console.log(footer.offsetHeight);

// const resizeMain = () => {
//   main.style.height = `${
//     main.offsetHeight - footer.offsetHeight - nav.offsetHeight
//   }px`;
//   console.log(main.offsetHeight);
// };
// resizeMain();

(resizeMain = () => {
  main.style.height = `${
    main.offsetHeight - footer.offsetHeight - nav.offsetHeight
  }px`;
})();

// addEventListener("resize", resizeMain);

const backGround = new Swiper("#my-swiper", {
  autoplay: {
    delay: 2000,
  },
  loop: true,
  scrollbar: {
    el: ".swiper-scrollbar",
    // 하단에 줄 스크롤 생김 (css에서 꾸밈)
    snapOnRelease: true,
    horizontalClass: "scroll-style",
  },
  // 스크린 경계치
  slidesPerview: 1,
  breakpoints: {
    480: {
      slidesPerview: 2,
    },
    1200: {
      slidesPerview: 3,
      spaceBetween: 20,
    },
  },
});

// 해당 메뉴를 클릭하면 해당 페이지 이동
// $('.global-nav a')
const menuA = document.querySelectorAll(".global-nav a");
console.log(menuA);
// forEach((배열의각요소,배열의인덱스번호)=>{실행문})
menuA.forEach((item, idx) => {
  item.addEventListener("click", (e) => {
    e.preventDefault();

    // .slideToLoop(슬라이드인덱스, 전환속도, 전환이벤트 true/false)
    backGround.slideToLoop(idx);
    // 네브 메뉴 누른곳부터 이어서 뜨게해줌 이거 안쓰면 멈춤
    backGround.autoplay.start();
  });
});
