
import express from "express";

import service from "../services/student.service.js";

const route = express.Router();
route.get("/", service.getstudent() );
route.get("/:batch", service.getstudentByBatch() );
route.post("/",  service.addstudent());
route.put("/:id", service.updatestudent());
route.delete("/:id", service.deletestudent());

export default route;


