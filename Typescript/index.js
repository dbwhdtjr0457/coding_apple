var animal;
// -> 미리 정의하고 사용!
var animal2 = "kim";
var animal3 = { name: "kim", age: 123 };
// type 이름은 첫 글자가 대문자인 것이 좋다.
// + 타입 이름에는 Type 들어가는 게 좋기도 함
var 출생지역 = { region: "seoul" };
// const -> 재할당을 막아주는 놈이지, 객체 안의 내용 변경을 막는 놈이 아니다.
출생지역.region = "busan";
console.log(출생지역);
var 여친 = {
    name: "엠버",
};
var position = { x: 10, y: 20 };
// type 재정의는 불가능!
// type Animal = boolean -> 불가능!!! 이미 위에서 정의했기 때문!
