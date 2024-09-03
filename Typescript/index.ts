let username: string = "kim";

let age: number = 50;

let marriage: boolean = true;

let members: string[] = ["kim", "park"];

// 온갖 곳에 다 타입 지정해놓을 필요는 없음
// 왜냐면... 알아서 타입 지정을 해줌!
// let temp = "string";
// temp = 3; -> Type 'number' is not assignable to type 'string'.

let project: {
  member: string[];
  days: number;
  started: boolean;
} = {
  member: ["kim", "park"],
  days: 30,
  started: true,
};
