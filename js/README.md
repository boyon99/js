## search

### html head
- [X] reset.css cdn
- [X] fontawesome icon
- [X] favicon.png

### css
- [X] 가상클래스 선택자 `:focus`
- [X] `transition : width .4s;`

### js
- [X] addEventListener : `click` `focus` `blur`
- [X] classList : `add()` `remove()` 
```javascript
El.addEventListener('click', function(){
  El.focus(); 
});
```

```javascript
El.addEventListener('focus', function(){
  El.classList.add('focused');
});
```

```javascript
El.addEventListener('blur', function(){
  El.classList.remove('focused');
});
```

<br/>

## menu-bar

### css
- [X] 가상클래스 선택자 `:hover`을 이용한 display 활용


<br/>

## rotation

### css
- [X] 가상클래스 선택자 `:hover`
- [X] `transition`과 `transform` 활용

<br/>

## mouseover

### css
- [X] 가상클래스 선택자 `:hover`과 `transition`, 가상 요소 선택자 `::after`

<br/>

## slide

### html 
- [X] input radio

### css
- [X] `white-space`
- [X] 선택자 `:checked` `~` `[]` `:nth-child()`
- [X] `transition` 과 `transform` 을 활용한 위치 변경 및 애니메이션

<br/>

## border-hover

### css
- [X] 선택자 `:hover` `::before` `::after`을 활용하여 요소 나타내기
- [X] `transition` 과 `transform` 을 활용한 테두리가 길어지는 효과

<br/>

## modal

### css
- [X] 선택자 `*=` `+`을 활용하여 요소 선택
- [X] `transition` 과 `transform` 을 활용한 위치 가운데 지정