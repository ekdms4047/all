// 대메뉴에 마우스를 올리면 소메뉴가 내려옴
// $('.global_nav'); // 탐색
// 스택 ->우물처럼 쌓아놓는것 큐-> 줄
// 애니메이션은 큐임! 그래서 stop 걸어줌 안그러면 버벅거림
// 문제점 1.버벅 ->큐로 해결 2. 소메뉴 클릭 하려면 값이 사라짐
/*
$('.global_nav > li > a').on('mouseenter', () => {
  $('nav .global_nav .sub_nav').stop().slideDown();
});

$('.global_nav > li > a').on('mouseleave', () => {
  $('nav .global_nav .sub_nav').stop().slideUp();
});


$('.global_nav > li > a').on({
  mouseenter: () => {
    $('nav .global_nav .sub_nav').stop().slideDown();
  },
  mouseleave: () => {
    $('nav .global_nav .sub_nav').stop().slideUp();
  },
});

$('.global_nav > li > a').hover(()=>{
  $('nav .global_nav .sub_nav').stop().slideDown();
},()=>{
  $('nav .global_nav .sub_nav').stop().slideUp(); 
});
 */

$('.global_nav > li > a').on('mouseenter', () => {
  $('nav .global_nav .sub_nav').stop().slideDown();
});
$('.global_nav').on('mouseleave', () => {
  $('nav .global_nav .sub_nav').stop().slideUp();
});
