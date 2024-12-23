let animal: string | number | undefined;
// 굉장히 길다;;

type Animal = string | number | undefined;
// -> 미리 정의하고 사용!

let animal2: Animal = "kim";
// type alias 활용

type RealAnimal = { name: string; age: number };
let animal3: RealAnimal = { name: "kim", age: 123 };
// type 이름은 첫 글자가 대문자인 것이 좋다.
// + 타입 이름에는 Type 들어가는 게 좋기도 함

const 출생지역 = { region: "seoul" };
// const -> 재할당을 막아주는 놈이지, 객체 안의 내용 변경을 막는 놈이 아니다.
출생지역.region = "busan";
console.log(출생지역);
// {region: 'busan'}
// 하지만 타입스크립트로 막을 수 있다.

type Girlfriend = {
  readonly name: string; // 읽기 전용으로 바꿔버리기
};
const 여친: Girlfriend = {
  name: "엠버",
};
// 여친.name = "수지"; // 에러

type PositionX = { x: number };
type PositionY = { y: number };

type NewType = PositionX & PositionY;

let position: NewType = { x: 10, y: 20 };

// type 재정의는 불가능!
// type Animal = boolean -> 불가능!!! 이미 위에서 정의했기 때문!
