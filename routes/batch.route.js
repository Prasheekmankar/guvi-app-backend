

import express from "express";

import service from "../services/batch.service.js";

const route = express.Router();
route.get("/", service.getBatch() );
route.post("/",  service.addBatch());
route.put("/:id", service.updateBatch());
route.delete("/:id", service.deleteBatch());

export default route;





// ///////  otherwise

// import express from "express";
// import service from "../services/batch.service.js";

// const route = express.Router();
// route.get("/", async (req, res) => service.getBatch() );
// route.post("/", async (req, res) => service.addbatch(req.body));
// route.put("/:id", async (req, res) => 
// service.updateBatch(req.params.id, req.body)
// );
// route.delete("/:id", (req, res) => service.deleteBatch(req.params.id));

// export default route;




