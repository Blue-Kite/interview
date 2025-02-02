### JS vs TS

js : 변수 타입이 런타임 때 결정, 브라우저에 직접 실행

ts: 컴파일러를 통해 js코드로 변경, 타입은 컴파일때 결정

타입스크립트를 사용하는 이유

에러 방지 / 코드 가이드 / 가독성을 높이고 타입 추론

### 제너릭 타입

타입을 함수 파라미터처럼 사용 => 재사용성을 높임
제약 조건을 줄 수 있음

```
function getProperty<T, O extends keyof T>(obj: T, key: O){}

```

### type과 interface의 차이

-   type : 원시값/객체/유니온타입/튜플 가능, &로 확장, 재선언하며 확장 불가능, computed value 가능

-   interface : 객체만, extends로 확장, 재선언 가능하며 자동으로 병합, computed value 가능

```
//computed value
[key in someObject]: string;
```
