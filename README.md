# Frontend
frontend practice


<br/>


## Html File Initial Content

#### 폴더 및 HTML 파일 생성 시 초기 HTML 코드

```html
<!DOCTYPE html>
<html lang="ko">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">

  <!--favicon-->
  <link rel="icon" href="../favicon.png" />

  <!--css-->
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/meyer-reset/2.0/reset.min.css"
    integrity="sha512-NmLkDIU1C/C88wi324HBc+S2kLhi08PN5GDeUVVVC/BVt/9Izdsc9SVeVfA1UZbY3sHUlDSyRXhCzHfr6hmPPw=="
    crossorigin="anonymous" referrerpolicy="no-referrer" />
  <link rel="stylesheet" href="./main.css">
  <!--js-->
  <script defer type="text/javascript" src="./main.js"></script>
  <title>frontend</title>
</head>

<body>
</body>
</html>
```


#### 오픈 그래프(The Open Graph protocol)
웹페이지가 공유될 때 활용되는 정보 지정
[오픈 그래프 속성 보기](https://ogp.me/)
```html
<meta property="og:type" content="website" />
<meta property="og:site_name" content="사이트 이름" />
<meta property="og:title" content="사이트 타이틀" />
<meta property="og:description" content="사이트 설명" />
<meta property="og:image" content="대표 이미지 주소" />
<meta property="og:url" content="페이지 주소" />
```

- `og:type`: 페이지의 유형(E.g, `website`, `video.movie`)
- `og:site_name`: 속한 사이트의 이름
- `og:title`: 페이지의 이름(제목)
- `og:description`: 페이지의 간단한 설명
- `og:image`: 페이지의 대표 이미지 주소(URL)
- `og:url`: 페이지 주소(URL)