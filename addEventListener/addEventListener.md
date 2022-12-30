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