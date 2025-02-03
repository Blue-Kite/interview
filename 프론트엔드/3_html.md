### padding vs margin

margin: 바깥쪽 여백을 vs padding: 안쪽 여백

### CSS에서 position이란?

-   `static`: 요소를 일반적인 문서 흐름에 따라 배치, top, right, bottom, left, z-index 속성이 적용되지 않음
-   `relative`: `top`, `right`, `bottom`, `left`의 값에 따라 오프셋을 적용
-   `absolute`: 요소를 일반적인 문서 흐름에서 제거하고, 가장 가까운 위치 지정 조상 요소(relative, fixed, absolute)에 대해 상대적으로 배치
-   `fixed`: 요소를 일반적인 문서 흐름에서 제거하고, 뷰포트 기준으로 삼아 배치, 스크롤해도 바뀌지 않는 위치에 지정
-   `sticky`: relative 처럼 작동하다가 스크롤하면 fixed처럼 작동

1. sticky + top, left, right, bottom 속성 중 하나 필요

2. 부모 요소 안에서 적용됨 => 부모 요소에 반드시 height 있어야함

### 반응형 디자인 vs 적응형 디자인

-   반응형 디자인

하나의 HTML과 CSS로 모든 디바이스에 대응

뷰포트 크기에 따라 유동적으로 레이아웃이 변화 => 미디어 쿼리를 사용해 breakpoint에서 스타일을 조정

장: 하나의 템플릿을 이용해 간편한 웹개발

단: 모든 콘텐츠를 다운로드해서 초기 로딩 속도 느림

-   적응형 디자인

서버에서 디바이스를 감지하여 그에 맞는 별도의 HTML을 전달

각 디바이스 크기별로 고정된 레이아웃을 사용

장: 빠른 로딩 속도

단: 각 기기별로 템플릿이 필요해 복잡한 개발

-   네이버는 적응형 디자인

모바일로 접속하면 자동으로 url에 m이 붙음. 모바일 전용 페이지로 리디렉션

도메인별 고정된 레이아웃 존재

-   user agent

1. HTTP 헤더에 포함, 서버가 해당 정보를 받아서 디바이스별 분기처리가 가능함

2. 포함된 정보

웹 브라우저 정보 (이름, 버전)
운영체제 정보
렌더링 엔진 정보 등등

```
const userAgent = navigator.userAgent;
const isMobile = /iPhone|iPad|iPod|Android/i.test(userAgent);
```
