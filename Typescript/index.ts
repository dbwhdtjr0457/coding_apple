let 제목 = document.querySelector("#title");

if (제목?.innerHTML) 제목.innerHTML = "반가워요";
// or
if (제목 instanceof Element) {
  제목.innerHTML = "반가워요";
}
// or
// let 제목 = document.querySelector("#title") as Element;
// 제목.innerHTML = "반가워요";
// -> 위험하다. 비상 시에 사용하자..

let 링크 = document.querySelector(".link");

// if (링크 instanceof Element) 링크.href = "https://kakao.com"; => 에러
// 이유? a 태그의 경우 HTMLAnchorElement로 해야됨.

if (링크 instanceof HTMLAnchorElement) 링크.href = "https://kakao.com";

let button = document.querySelector(".button");

// if (button instanceof HTMLButtonElement)
//   button.onclick = function () {
//     location.href = "https://kakao.com";
//   };

//or

if (button instanceof HTMLButtonElement)
  button.addEventListener("click", (e) => {
    window.location.href = "https://kakao.com";
  });

// or
button?.addEventListener("click", () => {});
