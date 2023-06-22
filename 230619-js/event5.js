/* 
window를 다 불러왔을 때. 이미지나 영상을 기다림
window.onload = function () {};
window.addEventListener('load', () => {});

DOM을 다 불러왔을 때. 이미지나 영상을 기다림
document.addEventListener('load', () => {});
*/

// 다른 외부 구조, 노드 상관없이 DOM만 불러오면 실행. 이미지나 영상을 기다리지 않음
document.addEventListener('DOMContentLoaded', () => {
  const dts = document.querySelectorAll('dt');
  console.log(dts);

  /* 
  dts[0].style.color = 'green';
  dts[0].style.fontWeight = 'bold';
  dts[1].style.color = 'green';
  dts[1].style.fontWeight = 'bold';
   */

  // dt를 직접 가져온게 아니라 매개변수의 이름을 내 마음대로 dt 로 한거임. item을 써도 되고 a 를 써도 되지만 헷갈릴 수 있기 때문.
  dts.forEach((dt) => {
    // 유사 배열이 가지고 있는 요소의 수만큼 적용
    dt.style.fontWeight = 'bold';
    dt.style.color = 'green';
  });

  const lis = document.querySelectorAll('#event1 >li');
  console.log(lis);

  // [li, li, li, li, li, li, li]
  lis.forEach((item) => {
    item.style.backgroundColor = 'darkkhaki';
    item.style.lineHeight = 1.6;
    item.style.margin = '10px 0';
  });

  document
    .querySelector('ol > li')
    .addEventListener('click', () => alert('클릭했습니다.'));

  const btn2 = document.querySelector('#event1 > li:nth-child(2)');
  const btn3 = document.querySelector('#event1 > li:nth-child(3)');
  const btn4 = document.querySelector('#event1 > li:nth-child(4)');
  const btn5 = document.querySelector('#event1 > li:nth-child(5)');
  const btn6 = document.querySelector('#event1 > li:nth-child(6)');
  const btn7 = document.querySelector('#event1 > li:nth-child(7)');

  btn2.addEventListener('dblclick', () => alert('더블 클릭했습니다.'));
  // btn3.addEventListener('mousemove', () =>
  //   console.log('마우스가 움직였습니다.')
  // );
  btn4.addEventListener('mousedown', () => alert('눌렀습니다.'));
  btn5.addEventListener('mouseup', () => alert('뗐습니다.'));
  btn6.addEventListener(
    'mouseover',
    () => (btn6.style.backgroundColor = 'orange')
  );
  btn7.addEventListener(
    'mouseout',
    () => (btn7.style.backgroundColor = 'salmon')
  );
});
