import { MongoClient } from "mongodb";

const uri =
  "mongodb+srv://dbwhdtjr0457:qwer134@cluster0.8qrt5.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
let connectDB: Promise<MongoClient>;

if (process.env.NODE_ENV === "development") {
  if (!global._mongo) {
    global._mongo = new MongoClient(uri).connect();
  }
  connectDB = global._mongo;
} else {
  connectDB = new MongoClient(uri).connect();
}

export default connectDB;
