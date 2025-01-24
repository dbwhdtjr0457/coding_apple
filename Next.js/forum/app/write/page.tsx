import Link from "next/link";

export default function Write() {
  return (
    <div className="p-20">
      <h4>Write a post</h4>
      <form action="/api/post/new" method="POST">
        <input type="text" name="title" placeholder="title" />
        <input type="text" name="content" placeholder="content" />
        <button type="submit">POST</button>
      </form>
      <Link href="/list">
        <button>Back</button>
      </Link>
    </div>
  );
}
