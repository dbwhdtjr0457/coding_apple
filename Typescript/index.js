// 함수 타입 전체를 type으로 alias만들기
// 이렇게 하면 함수 만들 때 타입 지정 직접 안 해도 된다.
var 함수 = function (a) {
    return 10;
};
console.log(함수("hello"));
var 회원정보 = {
    name: "kim",
    plusOne: function (a) {
        return a + 1;
    },
    changeName: function () { },
};
회원정보.plusOne(10);
var cutZero = function (x) {
    var result = x.replace(/^0+/, "");
    return result;
};
var removeDash = function (x) {
    var result = x.replace(/-/g, "");
    return parseFloat(result);
};
