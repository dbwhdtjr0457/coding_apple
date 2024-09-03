// Union Type -> 타입 2개 이상 합친 새로운 타입 만들기
let 회원: number | string = 123;

let 회원들: (number | string)[] = [1, "2", 3];

// any, unknown
let 이름: any = "123";
let 이름2: unknown = "123";

// unknown이 any보다는 안전함
// let 변수1 :string = 이름 이런 걸 했을 때
// 이름이 any면 에러가 안 나지만 unknown이면 에러 발생
// 혹은 let 이름: unknown일 때
// 이름 - 1 이런 걸 못함

// let 나이: string | number;
// 나이 + 1;
// -> string | number라는 타입이기 때문에 string도 아니고 number도 아님 -> 에러!

// let 나이: unknown = 1;
// 나이 - 1;
// -> unknown 타입이기 때문에 에러! number가 들어가있다고 해도 에러!

// 숙제
let user: string = "kim";
let age: undefined | number = undefined;
let married: boolean = false;
let 철수: (string | number | undefined | boolean)[] = [user, age, married];

let 학교: {
  score: (number | boolean)[];
  teacher: string;
  friend: string | string[];
} = {
  score: [100, 97, 84],
  teacher: "Phil",
  friend: "John",
};

학교.score[4] = false;
학교.friend = ["Lee", 학교.teacher];
