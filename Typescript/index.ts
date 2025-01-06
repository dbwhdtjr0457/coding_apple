// type 키워드도 사용 가능하지만, interface도 사용 가능.
// type Square = { color: string; width: number };
// let 네모: Square = { color: "red", width: 100 };
//=>
interface Square {
  color: string;
  width: number;
}

let 네모: Square = { color: "red", width: 100 };

// type과 interface 차이점 배우기 전에...
// quiz
// interface Student {
//   name: string;
// }

// interface Teacher {
//   name: string;
//   age: number;
// }

// let 학생: Student = { name: "kim" };

// let 선생: Teacher = { name: "kim", age: 20 };

// 하지만... 중복된다!
// extends를 활용하면 기존 interface에 확장 가능.

interface Student {
  name: string;
}

interface Teacher extends Student {
  age: number;
}

let 학생: Student = { name: "kim" };
let 선생: Teacher = { name: "kim", age: 20 };

// type도 가능하긴 함
// type Animal = { name: string };
// type Cat = { age: number } & Animal;

// type과 interface의 차이?
// interface는 중복 선언이 가능하다. 자동 extend가 된다.

interface Student {
  name: string;
}

interface Student {
  age: number;
}

let person: Student = {
  name: "kim",
  age: 20,
};

// type은 불가능하다. strict하다.
// 외부 라이브러리는 interface로 되어있는 경우가 많다. 확장 가능하게 설정하는 것이 가능하기 때문.
// 즉! 다른 사람이 많이 이용할 것 같으면 interface 사용하자.
