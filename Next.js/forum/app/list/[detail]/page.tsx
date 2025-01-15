import connectDB from "@/util/database";
import { ObjectId } from "mongodb";

export default async function Detail({
  params,
}: {
  params: Promise<{ detail?: string }>;
}) {
  let id = (await params).detail;

  const client = await connectDB;
  const db = client.db("forum");
  let result = await db.collection("post").findOne({ _id: new ObjectId(id) });

  if (!result) {
    return <div>존재하지 않는 페이지입니다.</div>;
  } else {
    return (
      <div>
        <h4>상세페이지</h4>
        <h4>{result.title}</h4>
        <p>{result.content}</p>
      </div>
    );
  }
}
