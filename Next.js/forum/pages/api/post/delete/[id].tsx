import connectDB from "@/util/database";
import { ObjectId } from "mongodb";

export default async function handler(req: any, res: any) {
  if (req.method === "DELETE") {
    const client = await connectDB;
    const db = client.db("forum");
    const { id } = req.query;
    let result = await db
      .collection("post")
      .deleteOne({ _id: ObjectId.createFromHexString(id) });
    if (result.deletedCount === 0) {
      res.status(404).json({ message: "Not Found" });
    } else {
      res.status(200).json({ message: "success" });
    }
  } else {
    res.status(405).json({ message: "Method Not Allowed" });
  }
}
