import express from "express";

import mongo from "./mongo.js";
import batchRoute from "./routes/batch.route.js";

(async () => {
  try {
    const app = express();

    // middleware
app.use(express.json());

    //MongoDB Connection
    await mongo.connect();
    // Routers
    app.get("/", (req, res) => {
      res.json({ status: "Success", message: "welcome to Guvi App" });
    });

    app.use("/batch", batchRoute);

    app.listen(3001, () => console.log("server running at 3001"));
  } catch (err) {
    console.error("error startng app");
  }
})();
