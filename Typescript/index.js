function 함수(x) {
    return x * 2;
}
함수(6);
// 혹은..
function 함수2(x) {
    console.log(x * 2);
}
함수2(3);
// 만약 함수에 파라미터가 들어가야 된다고 적었다면
// 함수를 호출할 때는 무조건 파라미터를 입력해야 함.
// 함수2() -> 에러!
// 들어오거나 안 들어오면 함수(x?: number)처럼 하면 됨
// 함수(x?: number) == 함수(x: number | undefined)
// 퀴즈
// function 함수3(x: number | string): void {
//   console.log(x + 3);
// }
// 함수3(2);
// 에러가 나는 이유?
// string | number는 string도 아니고 number도 아니기 때문에!
// 고치려면? narrowing 쓰면 됨
// 숙제
function Func(name) {
    if (name) {
        console.log("안녕하세요" + name);
    }
    else {
        console.log("이름이 없습니다.");
    }
}
function countfunc(num) {
    return num.toString().length;
}
function marriageFunc(income, house, score) {
    var result = 0;
    result += income;
    if (house)
        result += 500;
    if (score === "상")
        result += 100;
    if (result >= 600)
        return "결혼가능";
}
console.log(marriageFunc(700, false, "중"));
