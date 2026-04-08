import { MongoClient } from "mongodb";

export function connectToDB() {
  const client = MongoClient.connect(process.env.MONGO_URL);

  return client;
}
