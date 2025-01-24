import connectDB from "@/util/database";

export default async function handler(req: any, res: any) {
  const client = await connectDB;
  const db = client.db("forum");

  if (req.method === "GET") {
    let result = await db.collection("post").find().toArray();
    return res.status(200).json(result);
  }

  if (req.method === "POST") {
    const { title, content } = req.body;

    if (!title || !content) {
      return res.status(400).json({ error: "missing title or content" });
    }

    try {
      const postResult = await db
        .collection("post")
        .insertOne({ title, content });
      console.log(postResult);
      return res.status(200).redirect("/list");
    } catch (error) {
      return res.status(500).json({ error: "db error" });
    }
  }
}
