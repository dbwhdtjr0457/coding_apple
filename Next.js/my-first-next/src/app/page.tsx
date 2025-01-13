export default function Home() {
  const name: string = "Yoo";

  return (
    <div>
      <h4
        className="title"
        style={{
          color: "red",
          backgroundColor: "yellow",
        }}
      >
        반갑다
      </h4>
      <p className="title-sub">by dev {name}</p>
      <a href="http://google.com">링크</a>
    </div>
  );
}
