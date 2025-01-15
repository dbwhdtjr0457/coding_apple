import connectDB from "@/util/database";
import ListNode from "./ListNode";

export default async function Home() {
  const client = await connectDB;
  const db = client.db("forum");
  let result = await db.collection("post").find().toArray();

  return (
    <div className="list-bg">
      {result.map((post) => {
        return (
          <ListNode
            _id={post._id.toString()}
            title={post.title}
            content={post.content}
            key={post._id.toString()}
          />
        );
      })}
    </div>
  );
}
