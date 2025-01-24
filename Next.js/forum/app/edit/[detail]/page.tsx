import connectDB from "@/util/database";
import { ObjectId } from "mongodb";
import Link from "next/link";

export default async function EditPage({
  params,
}: {
  params: Promise<{ detail?: string }>;
}) {
  const result = await params;
  const id = result.detail;

  const client = await connectDB;
  const db = client.db("forum");
  let post = await db.collection("post").findOne({ _id: new ObjectId(id) });

  if (!post) {
    return <div>존재하지 않는 페이지입니다.</div>;
  }

  return (
    <div>
      <h4>Edit a post</h4>
      <form action="/api/post/edit" method="POST">
        <input type="text" name="title" defaultValue={post.title} />
        <input type="text" name="content" defaultValue={post.content} />
        <input type="hidden" name="id" value={post._id.toString()} />
        <button type="submit">EDIT</button>
      </form>
      <Link href="/list">
        <button>Back</button>
      </Link>
    </div>
  );
}
