import connectDB from "@/util/database";
import { ObjectId } from "mongodb";

export default async function handler(req: any, res: any) {
  const client = await connectDB;
  const db = client.db("forum");

  if (req.method === "POST") {
    const { title, content, id } = req.body;
    console.log(title, content, id);

    if (!title || !content) {
      return res.status(400).json({ error: "missing title or content" });
    }

    try {
      const postResult = await db
        .collection("post")
        .updateOne({ _id: new ObjectId(id) }, { $set: { title, content } });
      console.log(postResult);
      return res.status(200).redirect("/list");
    } catch (error) {
      return res.status(500).json({ error: "db error" });
    }
  }
}
