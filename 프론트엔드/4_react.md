### JSX

ES6 JS 문법 기반의 XML과 유사한 확장 문법

HTML처럼 컴포넌트(ui 작은 조각, 독립적, 재사용가능) 랜더링을 구조화

JS 코드 내부에 HTML를 작성해 DOM에 위치 가능

브라우저는 JSX를 읽을 수 없어 트랜스파일러로 JS코드로 변경 필요

개발자가 가독성이 좋고 재사용가능한 컴포넌트를 얻을 수 있음, JS 기능 사용

리액트 요소 vs 컴포넌트

요소 : React.createElement(type, {props}, children)

컴포넌트 : 요소를 생성하는 일종의 공장

### 상태 불변성

1. 상태 변경을 예측할 수 있음 -> 디버깅을 용이하게 하며, 코드의 안정성을 높임

2. 리액트는 props/state 변경 감지에 얕은 복사를 사용하는데 불변성을 유지하면 불필요한 렌더링을 방지할 수 있음

### React Lifecycle 와 SPA

-   SPA : 하나의 HTML 페이지에서 브라우저가 동적으로 콘텐츠를 변경, rest api를 사용해 필요한 데이터를 비동기적으로 변경

더 나은 사용자 경험과 서버 부하 감소를 제공함

-   lifecycle :

생성 -> 마운트 -> 업데이트 -> 언마운트

생성 : 컴포넌트가 메모리에 생성, 초기 상태나 props 설정(constructor, useState)

마운트: 컴포넌트가 DOM에 처음 삽입될 때, 랜더링 발생(화면에 그려짐), render 함수는 순수함수로 JSX가 HTML로 변환
랜더링 이후 첫 랜더링에만 실행되는 과정 실행(componentDidmount, useEffect)

업데이트: state/props 변경, 부모 컴포넌트 리랜더링 시 다시 화면에 그려짐

언마운트: 컴포넌트가 dom에서 제거, 불필요한 리소스 정리

### 클래스 컴포넌트의 라이프 사이클 메서드

React 컴포넌트가 생명주기에 따라 단계가 있는데 각 단계마다 특정 메서드 실행 가능

'constructor': 컴포넌트 생성후 가장 먼저 실행, state 초기화

'render': 컴포넌트 UI 정의

'componentDidMount': 컴포넌트가 화면에 나타난 후 실행, api 호출이나 구독 설정

'shouldComponentUpdate': 컴포넌트 리렌더링할지 결정, 성능 최적화에 사용

'componentDidUpdate': 컴포넌트가 업데이트된 후 실행, 업데이트 로직 처리

'componentWillUnmount': 컴포넌트가 사라지기 전에 실행, 구독 해제, 타이머 제거, 이벤트 리스너 제거

```
class ExampleComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { data: null };
  }

  componentDidMount() {
    // API 데이터 가져오기
    fetch('api/data')
      .then(response => response.json())
      .then(data => this.setState({ data }));
  }

  componentDidUpdate(prevProps) {
    // props 변경에 따른 부수 효과 처리
    if (this.props.id !== prevProps.id) {
      this.fetchData(this.props.id);
    }
  }

  componentWillUnmount() {
    // 정리 작업
    this.subscription?.unsubscribe();
  }

  render() {
    const { data } = this.state;
    return data ? <div>{data}</div> : <Loading />;
  }
}
```

### 클래스 컴포넌트 vs 함수형 컴포너트

-   클래스 컴포넌트 : React의 Component 클래스를 상속받아서 작성, LifeCycle 메서드로 컴포넌트 생명주기 관리
    React 컴포넌트의 속성과 상태에 접근하기 위해 this 키워드 사용

-   함수형 컴포너트 : hook을 통해 LifeCycle 라이프사이클 관리와 상태관리, this 필요 X

### react 사용 이유

-   virtual dom 으로 필요한 부분만 랜더링(재조정)

-   컴포넌트 기반의 재사용성, 가독성

-   단방향 데이터 흐름을 통해 상태 관리를 단순화 => 디버깅에 용이, 안정성이 높음

-   큰 생태계

### 가상돔

리액트로 생성된 실제 DOM의 메모리상의 복사본, HTML 웹 페이지를 트리 형태로 나타냄

목적: UI가 리랜더링 될때 DOM 작업을 최소화

1. 컴포넌트가 처음 랜더링 될 때 UI를 나타내는 가상 DOM 생성

2. 기존 상태가 변경될 때 가상 DOM를 생성

3. 재조정 - 기존 가상 DOM 스냅샷과 diffing 알고리즘을 사용해 변경 사항을 비교

4. 랜더링 라이브러리를 사용해 변경 사항을 실제 DOM에 업데이트

### props vs state

둘 다 변경시 상태변경시 랜더링 발생

props: 값이나 객체로 컴포넌트에 전달되는 인수, 부모가 자식 컴포너트에게 데이터를 전달하기 위해, 읽기 전용이며 불변

state: 컴포넌트 자체에서 관리하는 객체, 비공개, 업데이트를 그룹화해 일괄 처리함, 직접처리 불가능하고 기존 객체 복사해서 새로운 객체 생성

### 컴포넌트 리랜더링 시점

state/ props 변경, 부모 컴포넌트 리랜더링

### Hooks

React Hooks는 리액트 생명주기와 state와 관련된 JS 함수

훅을 사용하는 이유 ⇒ 관심사를 분리하고 구조화하며 가독성, 재사용성 높임

다음과 같은 문제점들을 해결하기 위해 등장

1. 컴포넌트 간 상태 로직 재사용의 어려움
2. 복잡한 컴포넌트의 이해와 관리의 어려움
3. 클래스의 this 키워드로 인한 혼란
4. 생명주기 메서드의 비일관성

훅을 사용 규칙

최상단에서 호출 / 리액트 함수에서만 호출

### Hooks 종류

1. useState

-   컴포넌트에 지역 상태를 추가를 목적
-   함수형 컴포넌트를 다시 렌더링하여 상태를 업데이트함
-   객체나 배열 상태는 항상 새로운 참조를 생성
-   비용이 드는 계산으로 도출되는 초기값이면 초기화 함수 이용
-   비동기인 이유

1-2. useReducer

```
const [state, setState] = useReducer(reducer, 초기값, init)

const reducer = (state, action) => {
    switch(action.type){ // }
}
const init = () => { //초기화 함수 }

```

2. useEffect

-   부수효과 처리(데이터 가져오기, 구독 설정, 수동으로 DOM 조작하기 등)
-   컴포넌트가 랜더링 이후 useEffect 내부 콜백함수 호출
-   의존성 배열이 []이면 초기 랜더링 이후 1번 실행, 없으면 리랜더링 이후 매번
-   변경이전 값으로 clean up 함수 호출되고 변경된 값으로 내부 콜백 함수 실행

3. useContext

-   전역 상태 관리 : props drilling 없이 컴포넌트 트리 전체에 데이터를 제공

useContext 사용 시 주의할 점

-   컨텍스트 값이 변경되면 해당 컨텍스트를 사용하는 모든 컴포넌트가 리렌더링
-   성능 최적화를 위해 필요한 경우 컨텍스트를 분리하거나 메모이제이션 이용
-   컨텍스트는 자주 변경되는 값보다는 테마, 인증 정보 등 비교적 안정적인 값에 적합

4. useMemo

-   계산 비용이 큰 함수(정렬, 필터링 등)의 결과값(값, 배열, 객체)을 메모이제이션하는 훅
-   모든 값에 사용하면 메모리 사용량을 증가시키고 초기 렌더링 성능을 저하

구체적으로 사용하면 안되는 경우?

사용시점

객체나 배열을 생성하여 자식 컴포넌트에 전달할 때 (불필요한 리렌더링 방지)

의존성 배열에 사용되는 값을 계산할 때 (useEffect, useCallback 등에서)

5. useCallback

-   콜백함수 메모제이션
-   의존성 배열이 변경되지 않는 한, 동일한 함수 참조를 유지

사용시점

자식 컴포넌트에 함수를 prop으로 전달할 때 유용

6. useRef

-   DOM 요소에 접근 / 상태를 저장하는 등의 용도
-   반환된 ref 객체는 컴포넌트의 전체 생명주기 동안 유지
-   ref 객체의 .current 속성을 변경해도 리렌더링이 트리거되지 않음
-   useRef로 생성된 ref 객체는 컴포넌트가 언마운트될 때까지 유지. 메모리 누수를 일으킬 수 있으므로 필요하지 않은 경우 정리

### useEffect vs useLayoutEffect

-   useEffect는 DOM이 그려진 후 호출, 추후 의존성 배열의 상태가 바뀌면 화면 리랜더링 되고 다시 실행

-   useLayoutEffect는 DOM이 그려지기 전 호출

### Props drilling

상위 컴포넌트에서 하위 컴포넌트까지 props가 깊게 중첩됨 => 구조가 복잡해져서 가독성과 유지보수가 안 좋아짐

### 리액트의 이벤트 관리(delegation)

### 불변성이 중요한 이유

### Reconciliation, Fiber

### <></> 대신 Fragment를 사용하는 것이 좋은 이유

더 빠르고 더 적은 메모리, key 속성 지원

### Key props

목록에서 어떤 요소가 추가, 삭제, 변경되었는지 식별 가능하게 함

### lazy loading, code splitting

lazy loading : 초기 로딩시 리소스(이미지, 폰트)를 전부 가져오지 않고 리소스를 동적으로 로딩

code splitting : 웹의 코드를 분할하여 필요한 시점에 로딩하는 것, React.lazy와 Suspense를 사용

### 순수 컴포넌트

### Suspense

### 에러 바운더리

### infinity scroll 고려할 점

### Flux 패턴

### 왜 state를 직접 바꾸지 않고 setState를 사용?

### React 에서 상태 변화가 생겼을 때, 변화를 어떻게 알아채는가?

### 제어 컴포넌트와 비제어 컴포넌트의 차이
