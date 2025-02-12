### css 우선순위

!important => 인라인 스타일링 => id 선택자 => 클래스/속성/가상 선택자 => 요소 선택자 => 전체 선택자

동일한 우선순위면 나중에 선언한 스타일링이 적용됨, 자신은 부모의 우선순위를 상속 x

### Flex

부모 요소인 container에 display:flex를 선언

부모 요소 : flex-direaction(배치 방향), justify-content(주축 방향), align-items(교차축 방향 정렬), flex-wrap(줄바꿈)

자식 요소 : flex-grow(남은 공간 분배), flex-shrink(축소 비율), flex-basis (기본 크기)

```
flex-direction: row;
flex-direction: row-reverse;
flex-direction: column;
flex-direction: column-reverse;
```

```
justify-content: flex-start;    /* 시작점 정렬 */
justify-content: flex-end;      /* 끝점 정렬 */
justify-content: center;        /* 가운데 정렬 */
justify-content: space-between; /* 양끝 정렬 */
justify-content: space-around;  /* 균등 여백 */
justify-content: space-evenly;  /* 균일 간격 */
```

```
align-items: stretch;     /* 컨테이너를 채움 (기본값) */
align-items: flex-start;
align-items: flex-end;
align-items: center;
align-items: baseline;
```

```
flex-wrap: nowrap;       /* 한 줄에 배치 (기본값) */
flex-wrap: wrap;         /* 여러 줄에 배치 */
flex-wrap: wrap-reverse;
```

```
flex-grow: 0; /* 기본값 */
flex-grow: 1; /* 남은 공간을 1의 비율로 차지 */
```

```
flex-shrink: 1; /* 기본값 */
flex-shrink: 0; /* 축소하지 않음 */
flex-shrink: 2; /* 2배로 축소 */
```

```
flex-basis: auto; /* 기본값 */
flex-basis: 0;    /* 0부터 시작 */
flex-basis: 50%;  /* 50% 크기로 시작 */
```

### Grid

### Float

기본 레이아웃에서 벗어나 이동함

```
.element {
  float: left;
  float: right;
  float: none;    /* default */
}
```

float 속성이 적용된 요소 다음 요소들이 더 이상 float 속성 영향을 안 받도록 해야함

```
.next-element {
  clear: both;    /* 양쪽 float 해제 */
  clear: left;
  clear: right;
}
```

### Display 속성

1. block
   a. width, height 설정 가능<br/>  
   b. 부모 요소 100% <br/>  
   c. 줄바꿈 o <br/>  
   대표적 요소: `<div>`, `<p>`, `<h1>`<br/>

2. inline
   a. 콘텐츠 크기만큼만 공간 차지<br/>  
   b. width, height 설정 불가<br/>  
   c. 줄바꿈 x<br/>  
   대표적 요소: `<span>`, `<a>`<br/>

3. inline-block
   a. width, height 설정 가능<br/>  
   b. 줄바꿈 x<br/>  
   대표적 요소: `<button>`, `<input>`<br/>

4. flex, grid는 위 참고

5. none
   요소를 화면에서 완전히 제거

#### inline vs inline-block

### 시맨틱 마크업

HTML 요소들이 가진 의미에 맞게 구조를 설계

유지보수 편리/ SEO 최적화/ 웹 접근성에 유리

```
<header> <footer> <main> <aside> <nav> <ul> <ol> <li> <article> <section> <h1> ~ <h6>
```

### CSS vs Styled-components

- CSS : [name].module.css 파일 적용

- CSS-in-JS

1. Styled-components : 컴포넌트 기반으로 유지보수성 향상, 동적 스타일링 적용 수월 / JS 번들 크기 증가

2. tailwind css

### padding vs margin

margin: 바깥쪽 여백을 vs padding: 안쪽 여백

### CSS에서 position이란?

- `static`: 요소를 일반적인 문서 흐름에 따라 배치, top, right, bottom, left, z-index 속성이 적용되지 않음
- `relative`: `top`, `right`, `bottom`, `left`의 값에 따라 오프셋을 적용
- `absolute`: 요소를 일반적인 문서 흐름에서 제거하고, 가장 가까운 위치 지정 조상 요소(relative, fixed, absolute)에 대해 상대적으로 배치
- `fixed`: 요소를 일반적인 문서 흐름에서 제거하고, 뷰포트 기준으로 삼아 배치, 스크롤해도 바뀌지 않는 위치에 지정
- `sticky`: relative 처럼 작동하다가 스크롤하면 fixed처럼 작동

1. sticky + top, left, right, bottom 속성 중 하나 필요

2. 부모 요소 안에서 적용됨 => 부모 요소에 반드시 height 있어야함

### z-index와 스택 컨텍스트(stacking context)

### 반응형 디자인 vs 적응형 디자인

- 반응형 디자인

하나의 HTML과 CSS로 모든 디바이스에 대응

뷰포트 크기에 따라 유동적으로 레이아웃이 변화 => 미디어 쿼리를 사용해 breakpoint에서 스타일을 조정

장: 하나의 템플릿을 이용해 간편한 웹개발

단: 모든 콘텐츠를 다운로드해서 초기 로딩 속도 느림

- 적응형 디자인

서버에서 디바이스를 감지하여 그에 맞는 별도의 HTML을 전달

각 디바이스 크기별로 고정된 레이아웃을 사용

장: 빠른 로딩 속도

단: 각 기기별로 템플릿이 필요해 복잡한 개발

- 네이버는 적응형 디자인

모바일로 접속하면 자동으로 url에 m이 붙음. 모바일 전용 페이지로 리디렉션

도메인별 고정된 레이아웃 존재

- user agent

1. HTTP 헤더에 포함, 서버가 해당 정보를 받아서 디바이스별 분기처리가 가능함

2. 포함된 정보

웹 브라우저 정보 (이름, 버전)
운영체제 정보
렌더링 엔진 정보 등등

```
const userAgent = navigator.userAgent;
const isMobile = /iPhone|iPad|iPod|Android/i.test(userAgent);
```
