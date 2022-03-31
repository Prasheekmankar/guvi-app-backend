import { config } from "dotenv";
import express from "express";
import cors from "cors";
import mongo from "./mongo.js";
import batchRoute from "./routes/batch.route.js";

config();

(async () => {
  try {
    const app = express();

    // middleware
app.use(express.json());

app.use(cors({origin:"guvi.netlify.com"}));

    //MongoDB Connection
    await mongo.connect();
    // Routers
    app.get("/", (req, res) => {
      res.json({ status: "Success", message: "welcome to Guvi App" });
    });

    app.use("/batch", batchRoute);

    app.listen(process.env.PORT, () => console.log("server running at 3001"));
  } catch (err) {
    console.error("error startng app" ,err);
  }
})();
