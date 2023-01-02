## scroll

### html head
- [X] reset.css cdn
- [X] favicon.png
- [X] scrollmagic cdn

### css
- [X] `background-attachment: fixed;`을 이용하여 배경 고정
- [X] `transition`과 `transform`을 이용하여 글자 애니메이션 구현

### js
- [X] foreach
- [X] ScrollMagic

```javascript
new ScrollMagic
  .Scene({ // 감시할 장면(Scene)을 추가
    triggerElement: spyEl, // 보여짐 여부를 감시할 요소를 지정
    triggerHook: .8 // 화면의 80% 지점에서 보여짐 여부 감시
  })
  .setClassToggle(spyEl, 'show') // 요소가 화면에 보이면 show 클래스 추가
  .addTo(new ScrollMagic.Controller()) // 컨트롤러에 장면을 할당(필수!)
```


