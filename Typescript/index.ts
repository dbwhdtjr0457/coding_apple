// Narrowing, Assertion

function 내함수(x: number | string) {
  // Narrowing
  if (typeof x === "string") return x + "1";
  else return x + 1;
}

console.log(내함수("123"));
console.log(내함수(123));

function 내함수2(x: number | string) {
  let array: number[] = [];
  if (typeof x === "number") array[0] = x;

  // Narrowing으로 판전해주는 문법들:
  // typeof 변수
  // 속성명 in 오브젝트자료
  // 인스턴스 instanceof 부모
  // -> 그냥 현재 변수의 타입이 뭔지 특정지을 수 있기만 하면 다 인정해줌
}

// assertion 문법 -> 타입 덮어쓰기
function 내함수3(x: number | string) {
  let array: number[] = [];
  array[0] = x as number; // number로 assertion
}

// as 문법의 용도:
// 1. narrowing
// 즉, 타입을 "변경"하는데에 사용하면 안 됨.
// 2. 무슨 타입이 들어올 지 100% 확실할 때 사용.
// 내함수3("123") 이런 거 들어올 경우가 있으면 사용하지 말라는 뜻.

// 숙제
function cleaner(array: (string | number)[]): number[] {
  return array.map((item: string | number) => {
    if (typeof item === "string") {
      return Number(item);
    } else {
      return item;
    }
  });
}

console.log(cleaner(["1", 2, "3"]));
