// 함수 rest 파라미터, destructuring 할 떄 타입 지정
function 함수1(...a: number[]) {
  // -> 함수 rest 파라미터: ...a와 같이 몇 개 들어올지 모를 떄 사용
  console.log(a);
}

함수1(1, 2, 3, 2, 1, 2);

//quiz

let person = { student: true, age: 20 };

type Person = {
  student: boolean;
  age: number;
};

function 함수2({ student, age }: Person) {
  console.log(student, age);
}

함수2(person);
