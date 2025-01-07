// 타입스크립트에서는 자바스크립트에서 사용하지 못하던 것들을 사용할 수 있음.
// 객체지향적인 코딩 가능! (private, public 등등)
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// class User {
//   public name: string; // public 키워드 -> 모든 자식들이 이용가능. 사실 아무 키워드 없으면 기본으로 public.
//   constructor(name: string) {
//     this.name = name;
//   }
// }
// let user1 = new User("kim");
// user1.name = "하이~";
// console.log(user1.name); // 하이~
// class User {
//   private name: string;
//   constructor(name: string) {
//     this.name = name;
//   }
// }
// let user1 = new User("kim");
// user1.name = "park"; // 에러!!!!!
// 만약 private 변수 내용을 바꾸고 싶으면
// class 내 setter 함수를 작성해서 활용하면 된다. 진짜 객체지향처럼!
// protected 키워드: extend 되는 class에서 수정 가능. 외부, 혹은 자식에서는 수정 불가능.
// static 키워드: 부모 클래스에만 부여됨.
var User = /** @class */ (function () {
    function User() {
        this.x = 10;
        this.y = 20;
    }
    User.z = 30; // -> NewUser에는 전달되지 않음.
    return User;
}());
var NewUser = /** @class */ (function (_super) {
    __extends(NewUser, _super);
    function NewUser() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NewUser.prototype.addX = function () {
        // this.x = 10; => 에러
    };
    NewUser.prototype.addY = function () {
        this.y = 20;
    };
    return NewUser;
}(User));
var user = new NewUser();
// user.y = 10; => 에러! 왜냐면 protected이기 때문에 자식은 수정할 수 없다.
console.log(user);
