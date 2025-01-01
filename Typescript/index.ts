// 함수 타입 전체를 type으로 alias만들기

type funcType = (a: string) => number;

// 이렇게 하면 함수 만들 때 타입 지정 직접 안 해도 된다.

let 함수: funcType = function (a) {
  return 10;
};

console.log(함수("hello"));

// object 내 함수도 타입 지정 가능

type Member = {
  name: string;
  plusOne: (a: number) => number;
  changeName: () => void;
};

let 회원정보: Member = {
  name: "kim",
  plusOne(a) {
    return a + 1;
  },
  changeName: () => {},
};

회원정보.plusOne(10);

// 숙제
type cutZeroFunction = (s: string) => string;
type removeDashFunction = (s: string) => number;

let cutZero: cutZeroFunction = function (x) {
  let result = x.replace(/^0+/, "");
  return result;
};

let removeDash: removeDashFunction = function (x) {
  let result = x.replace(/-/g, "");
  return parseFloat(result);
};
