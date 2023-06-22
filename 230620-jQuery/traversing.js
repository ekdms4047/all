/* 
  https://api.jquery.com/category/traversing

  $('대상').method(); 대상의 값은 CSS에서 사용되던 선택자 작성 방식과 동일

  == document.querySelector('');
  jQuery('*'); 제이쿼리 방식으로 전체 탐색자를 탐색해라
  $('#id'); 아이디 선택자 탐색
  $('.class'); 클래스 선택자 탐색
  $('#id > .class, type'); 다중선택자 탐색
  $('type:nth-child()');
  $('type[attribute=value]');
  $(':hover');

  .method();
  $().parent(); 직계 부모 노드 탐색
  $().parents(); 모든 부모 노드 탐색
  $().children(); 모든 직계 자식 노드 탐색
  $().siblings(); 형제 노드 탐색
  $().prev(); 바로 이전 형제 노드 탐색
  $().next(); 바로 다음 형제 노드 탐색
  $().prevALL(); 이전 형제 노드 '모두' 탐색
  $().nestALL(); 다음 형제 노드 '모두' 탐색
  $().first(); 일치하는 요소에서 첫번째 노드 탐색
  $().last(); 일치하는 요소에서 마지막 노드 탐색
  $().find(); 일치하는 하위 노드 탐색. 반드시 매개변수 작성해야 함 
  $().filter(); 일치하는 노드 탐색 (주로 걸러냄)
*/

// 문서 준비 이벤트 addEventListner('DOMContentLoaded', function () {});
// $(document).ready(function () {});

$(document).ready(function () {
  // ==.style.backgroundColor
  // $().css({'속성':'값', '속성':'값'});
  $('body').css({ backgroundColor: '#efefef' });
  $('body *').css({
    border: '3px solid #999',
    padding: '10px',
    margin: '10px',
  });

  $('a').parent(); // a의 직계 부모(li) 탐색
  // method chaining 여러 개의 매서드 연결
  $('a').parent().css({ borderColor: 'red' });
  // $('a').css({ borderColor: 'red' }).parent(); a에 CSS를 적용한 뒤 부모(li) 탐색

  // $('a').parents().css({ 'border-style': 'dotted' }); 매개 변수를 작성하지 않으면 a의 상위 노드 모두 탐색. 즉 body, html 도 탐색
  $('a').parents('#wrapper').css({ 'border-style': 'dotted' });
  $('container').children(); // 자식 노드를 탐색. 매개 변수를 지정하지 않으면 같은 라인의 모든 직계 자식 노드 탐색
  // $('.container').children().css({ 'border-color': 'orange' });
  $('.container').children('h1').css({ 'border-color': 'orange' });
  $('li.part').siblings(); // li.part의 형제 관계 탐색
  $('li.part').siblings().css({
    backgroundColor: 'lightblue',
  });
  $('li.part').siblings().css({ backgroundColor: 'lightblue' });
  // $('li.part').siblings('li:last-child').children('a:first-child').css({ borderStyle: 'dashed' });

  // .first(); 자식인 a들 중에 첫번째 탐색한 노드 반환
  $('li.part')
    .siblings('li:last-child')
    .children()
    .first()
    .css({ borderStyle: 'dashed', textDecoration: 'none', color: 'red' });

  $('.p2').prev(); // .p2 앞에 작성된 형제 노드 탐색
  $('.p2').prev().css({ backgroundColor: 'salmon' }); // 앞에 작성된 형제 노드 탐색

  $('.p2').next(); // .p2 뒤에 작성된 형제(ul) 노드 탐색
  $('.p2').next().css({ backgroundColor: 'orange' });

  $('.p2').prevAll(); // .p2의 앞에 작성된 형제 노드 *전부* 탐색
  $('.p2').prevAll().css({ border: '6px groove #999' });

  // text4 탐색
  // $('#header').next().next().next().children().last().find('a').last().css({
  //   color: 'red',
  //   textDecoration: 'none',
  //   backgroundColor: '#000',
  // }); _다은

  // $('#header').siblings('ul').children('li:last-child').children().last().css({
  //   color: 'red',
  //   textDecoration: 'none',
  //   backgroundColor: '#000',
  // });

  // .find('a:last-child'); ul의 하위 노드 중 a:last-child 탐색. 반드시 *매개변수* 필요
  $('#header').siblings('ul').find('a:last-child').css({
    color: '#fff',
    textDecoration: 'none',
    backgroundColor: '#000',
  });

  $('#header').find('p').css({ backgroundColor: 'green' });

  $('.part').filter('ul'); // .part 중 ul 탐색
  $('.part').filter('li').css({ listStyle: 'none' });

  $('div').filter('#header').children().css({ padding: 40 });
});
