import { useState } from "react";
import "./App.css";

function App() {
  const [titles, setTitles] = useState([
    "남자 코트 추천",
    "강남 우동 맛집",
    "파이썬 독학",
  ]);

  const listItems = titles.map((title) => (
    <div className="list" key={title}>
      <h4>{title}</h4>
      <p>2월 17일 발행</p>
    </div>
  ));

  return (
    <div className="App">
      <div className="black-nav">
        <div>개발 blog</div>
      </div>
      <div>{listItems}</div>
      <button
        onClick={() => {
          let copy = [...titles];
          copy[0] = "여자 코트 추천";
          setTitles(copy);
        }}
      >
        수정버튼
      </button>
    </div>
  );
}

export default App;
