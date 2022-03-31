import { MongoClient } from "mongodb";

const mongo = {
 
  db: null, // DB connect string
  batc:null,   // Batch collection

  async connect() {
    const client = new MongoClient(process.env.MONGODB_URL);
    await client.connect();
    console.log(`MongoDB Connected - ${process.env.MONGODB_URL}`);

    this.db = client.db(process.env.MONGODB_NAME);
    console.log(`mongodb selected - ${process.env.MONGODB_NAME}`);
    this.batch = this.db.collection("batch");
    this.student = this.db.collection("student");
    console.log("Collection Initialize")
  },
};

export default mongo;
