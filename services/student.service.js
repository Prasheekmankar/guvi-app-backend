import { ObjectId } from "mongodb";
import db from "../mongo.js";

const service = {
  async getStudent(req, res) {
    //find
    try {
      const data = await db.student.find().toArray();
      console.log("Student data fetched");
      res.json({ status: "success", data });
    } catch (err) {
      console.error("Error fetching student", err);
      res.json({ status: "error", error: "cannot fetch student Data" });
    }
  },
  async addStudent(req, res) {
    //InsertOne
    try {
      const { insertedId: _id } = await db.student.insertOne(req.body);
      console.log("student incerted", _id, req.body);
      res.json({ status: "success", data: { _id, ...req.body } });
    } catch (err) {
      console.error("Error incerting student", err);
      res.json({ status: "error", error: "cannot insert student Data" });
    }
  },
  async updateStudent(req, res) {
    //UpdateOne
    try {
      const { value } = await db.student.findOneAndUpdate(
        { _id: ObjectId(req.params.id) },
        { $set: { ...req.body } },
        { ReturnDocument: "after" }
      ); // in mongodb 5 virsion use returnNewDocument : "true"
      console.log("student udated", req.params.id, req.body);
      res.json({ status: "success", data: value });
    } catch (err) {
      console.error("Error updating student", err);
      res.json({ status: "error", error: "cannot udate Student Data" });
    }
  },
  async deleteStudent(req, res) {
    //DeleteOne  
    try {
      await db.student.deleteOne({ _id: ObjectId(req.params.id) });
      console.log("Student deleted", req.params.id);
      res.json({ status: "success" });
    } catch (err) {
      console.error("Error deleting Student", err);
      res.json({ status: "error", error: "cannot deleting Student " });
    }
  },
};

export default service;