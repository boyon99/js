# Start

## html

#### Open Graph protocol

웹페이지가 공유될 때 활용되는 정보 지정 [속성 보기](https://ogp.me/)

```html
<meta property="og:type" content="website" />
<meta property="og:site_name" content="사이트 이름" />
<meta property="og:title" content="사이트 타이틀" />
<meta property="og:description" content="사이트 설명" />
<meta property="og:image" content="대표 이미지 주소" />
<meta property="og:url" content="페이지 주소" />
```

#### Google Fonts

[Google Fonts](https://fonts.google.com/)에서 제공되는 코드를 연결하여 폰트를 사용할 수 있다.

#### Google Material Icons

[Google Material Icons](https://material.io/resources/icons/?style=baseline)에서 아이콘을 무료로 사용할 수 있다. 더 자세한 사항은 [material icons guild](https://developers.google.com/fonts/docs/material_icons#icon_font_for_the_web)에서 확인할 수 있다.

```html
<link
  href="https://fonts.googleapis.com/icon?family=Material+Icons"
  rel="stylesheet"
/>
```

#### Font awesome

[Font Awesome](https://fontawesome.com/)에서 아이콘을 사용할 수 있다.

```html
<link
  rel="stylesheet"
  href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css"
  crossorigin="anonymous"
  referrerpolicy="no-referrer"
/>
```

#### ICONS8

아이콘 및 음악을 [icons8](https://icons8.kr/)에서 제공되는 HTML을 통해 사용할 수 있다.

<br/>

## css

#### Gradient

원하는 [gradient](https://cssgradient.io/)을 입력하연 해당 코드를 제공한다.

#### Bootstrap

[bootstrap](https://getbootstrap.com/)는 웹사이트를 쉽게 만들 수 있게 도와주는 CSS, JS 프레임워크

#### svgbackgrounds

[svgbackgrounds](https://www.svgbackgrounds.com/)는 웹사이트의 배경을 제공해주는 사이트이다. [그 외 사이트](https://dev.to/kiranrajvjd/the-ultimate-css-background-pattern-resource-20m8)를 참고할 수 있다.

<br>

## js

#### Gsap

[GSAP(The GreenSock Animation Platform)](https://greensock.com/gsap/)은 자바스크립트로 제어하는 타임라인 기반의 애니메이션 라이브러리이다.

```html
<script
  src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.11.4/gsap.min.js"
  crossorigin="anonymous"
  referrerpolicy="no-referrer"
></script>
```

#### Lodash

[Lodash](https://lodash.com/)는 다양한 유틸리티 기능을 제공하는 자바스크립트 라이브러리로 array, object, 문자, 숫자 자료를 다루기 편하게 해주는 기본함수들을 제공한다. [Lodash API](https://lodash.com/docs/4.17.15)에서 더 많은 정보를 확인할 수 있다.

```html
<script
  src="https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.21/lodash.min.js"
  crossorigin="anonymous"
  referrerpolicy="no-referrer"
></script>
```

#### Swiper

[Swiper](https://swiperjs.com/)는 하드웨어 가속 전환과 여러 기본 동작을 갖춘 현대적인 슬라이드 라이브러리이다. [Swiper API](https://swiperjs.com/swiper-api)를 확인할 수 있다.

```html
<script
  src="https://cdnjs.cloudflare.com/ajax/libs/Swiper/8.4.5/swiper-bundle.min.js"
  crossorigin="anonymous"
  referrerpolicy="no-referrer"
></script>
<link
  rel="stylesheet"
  href="https://cdnjs.cloudflare.com/ajax/libs/Swiper/8.4.5/swiper-bundle.css"
  crossorigin="anonymous"
  referrerpolicy="no-referrer"
/>
```

#### ScrollMagic

[ScrollMagic](https://github.com/janpaepke/ScrollMagic)은 스크롤과 요소의 상호 작용을 위한 자바스크립트 라이브러리로 [ScrollMagic API](http://scrollmagic.io/docs/)에서 더 자세한 사항을 확인할 수 있다.

```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.8/ScrollMagic.min.js"></script>
```

#### Animate On Scroll

[AOS](https://github.com/michalsnik/aos)는 스크롤 이벤트 시 나타나는 애니메이션을 만들 때 사용하는 라이브러리로 [aos site](https://michalsnik.github.io/aos/)에서 더 자세한 사항을 확인할 수 있다.

```html
<!--css, js cdn 파일 삽입 후 -->
<script>
  AOS.init();
</script>
```

#### JQuery

[Jquery](https://releases.jquery.com/)는 HTML의 클라이언트 사이드 조작을 단순화 하도록 설계된 크로스 플랫폼의 자바스크립트 라이브러리다. [api](https://api.jquery.com/)에서 더 자세한 사항을 확인할 수 있다.

```html
<script src="https://code.jquery.com/jquery-3.6.3.min.js"></script>
```

#### Chart.js

[chart.js](https://cdnjs.com/libraries/Chart.js)는 차트를 만들 수 있는 라이브러리이다. [chart](https://www.chartjs.org/docs/latest/)에서 더 자세한 사항을 확인할 수 있다.

```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/4.2.0/chart.min.js"></script>
```

<br/>

## reference

#### cdn

[cdn](https://cdnjs.com/)를 통해 제공되는 JS 라이브러리와 API를 사용할 수 있다.

<br/>

## api

#### Youtube API

[IFrame Player API](https://developers.google.com/youtube/iframe_api_reference?hl=ko)를 통해 YouTube 동영상을 제어할 수 있다. [플레이어 매개변수(playerVars)](https://developers.google.com/youtube/player_parameters.html?playerVersion=HTML5&hl=ko#Parameters)를 통해 더 알아볼 수 있다.

```html
<!-- in HEAD -->
<script defer src="./js/youtube.js"></script>

<!-- in BODY -->
<div id="player"></div>
```

```javascript
// Youtube IFrame API를 비동기로 로드합니다.
var tag = document.createElement("script");
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName("script")[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

function onYouTubePlayerAPIReady() {
  // <div id="player"></div>
  new YT.Player("player", {
    videoId: "", // 재생할 유튜브 영상 ID
    playerVars: {
      autoplay: true, // 자동 재생 유무
      loop: true, // 반복 재생 유무
      playlist: "", // 반복 재생할 유튜브 영상 ID 목록
    },
    events: {
      // 영상이 준비되었을 때,
      onReady: function (event) {
        event.target.mute(); // 음소거
      },
    },
  });
}
```
