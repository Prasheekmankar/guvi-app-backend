import { ObjectId } from "mongodb";
import db from "../mongo.js";

const service = {
  async getBatch(req, res) {
    //find
    try {
      const data = await db.batch.find().toArray();
      console.log("batch data fetched");
      res.json({ status: "success", data });
    } catch (err) {
      console.error("Error fetching batch", err);
      res.json({ status: "error", error: "cannot fetch batch Data" });
    }
  },
  async addBatch(req, res) {
    //InsertOne
    try {
      const { insertedId: _id } = await db.batch.insertOne(req.body);
      console.log("batch incerted", _id, req.body);
      res.json({ status: "success", data: { _id, ...req.body } });
    } catch (err) {
      console.error("Error incerting batch", err);
      res.json({ status: "error", error: "cannot insert batch Data" });
    }
  },
  async updateBatch(req, res) {
    //UpdateOne
    try {
      const { value } = await db.batch.findOneAndUpdate(
        { _id: ObjectId(req.params.id) },
        { $set: { ...req.body } },
        { ReturnDocument: "after" }
      ); // in mongodb 5 virsion use returnNewDocument : "true"
      console.log("batch udated", req.params.id, req.body);
      res.json({ status: "success", data: value });
    } catch (err) {
      console.error("Error updating batch", err);
      res.json({ status: "error", error: "cannot udate batch Data" });
    }
  },
  async deletebatch(req, res) {
    //DeleteOne
    try {
      await db.batch.deleteOne({ _id: ObjectId(req.params.id) });
      console.log("batch deleted", req.params.id);
      res.json({ status: "success" });
    } catch (err) {
      console.error("Error deleting batch", err);
      res.json({ status: "error", error: "cannot deleting batch " });
    }
  },
};

export default service;

// ///////  otherwise

// import { ObjectId } from "mongodb";
// import mongo from "../mongo.js";

// const service ={

//     getBatch(){
//           //find
//         try{
//             const data = await mongo.db.collection("batch").find().toArray();
//             console.log("batch data fetched");
//             res.json({ status:"success", data});
//         } catch (err){
//             console.error("Error fetching batch",err);
//            res.json({ status:"error" , error:"cannot fetch batch Data" });
//         }

//     },
//     addBatch(Data){
//         //InsertOne
//         try{
//             const { insertedId : _id} = await mongo.db
//             .collection("batch")
//             .insertOne(Data);
//             console.log("batch incerted", _id,Data);
//             res.json({ status:"success", data:{_id, ...Data} });
//         } catch (err){
//             console.error("Error incerting batch",err);
//            res.json({ status:"error" , error:"cannot insert batch Data" });
//         }
//     },
//     updateBatch(_id,data){
//     //UpdateOne
//     try{
//     const {value} = await mongo.db
//     .collection("batch")
//     .findOneAndUpdate(
//         {_id: ObjectId(_id) },
//         { $set: {...data}} ,
//         {ReturnDocument:"after"} ) ;   // in mongodb 5 virsion use returnNewDocument : "true"
//         console.log("batch udated", _id,data);
//     res.json({ status:"success", data:value });
// } catch (err){
//     console.error("Error updating batch",err);
//    res.json({ status:"error" , error:"cannot udate batch Data" });
// }
//     },
//     deletebatch(_id){
// //DeleteOne
// try{
//     await mongo.db
//     .collection("batch")
//     .deleteOne({_id: ObjectId(_id) });
//     console.log("batch deleted", _id);
//     res.json({ status:"success"});
// } catch (err){
//     console.error("Error deleting batch",err);
//    res.json({ status:"error" , error:"cannot deleting batch " });
// }
//     }
// }

// export   default service;
