import { MongoClient } from "mongodb";
const mongoUrl = "mongodb://localhost:27017";
const mongoDbName = "guvi";

const mongo = {
  db: null,

  async connect() {
    const client = new MongoClient(mongoUrl);
    await client.connect();
    console.log(`MongoDB Connected - ${mongoUrl}`);

    this.db = client.db(mongoDbName);
    console.log(`mongodb selected - ${mongoDbName}`);
  },
};

export default mongo;
