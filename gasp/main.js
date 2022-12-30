/* fade */
const fadeEls = document.querySelectorAll('.visual .fade-in');
fadeEls.forEach(function(fadeEl, index){
  gsap.to(fadeEl, 1, { // gsap.to(요소, 시간, 옵션)
    delay: (index+1) * .7,
    opacity: 1
  });
});

/* floating item */
function random(min, max) {
  // .toFixed()를 통해 반환된 문자 데이터를, parseFloat()을 통해 소수점을 가지는 숫자 데이터로 변환
  return parseFloat((Math.random() * (max - min) + min).toFixed(2))
}

function floatingObject(selector, delay, size){
  gsap.to(selector, random(1.5, 2,5), {
    y: 20,
    repeat:-1,
    yoyo: true,
    ease: Power1.easeInOut,
    delay: random(0, delay)
  });
}

floatingObject('.floating1',1,15);
floatingObject('.floating2',.5,15);