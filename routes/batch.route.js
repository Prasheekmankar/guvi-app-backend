import express from "express";
import { ObjectId, ReturnDocument } from "mongodb";
import mongo from "../mongo.js";
const route = express.Router();

route.get("/", async (req, res)=>{
    //find
    try{
        const data = await mongo.db.collection("batch").find().toArray();
        res.json({ status:"success", data});
    } catch (err){
       res.json({ status:"error" , error:"cannot fetch batch Data" });
    }
   
});

route.post("/", async (req,res)=>{
    //InsertOne
    try{
        const { insertedId : _id} = await mongo.db
        .collection("batch")
        .insertOne(req.body);
        res.json({ status:"success", data:{_id, ...req.body} });
    } catch (err){
       res.json({ status:"error" , error:"cannot insert batch Data" });
    }
});

route.put("/:id", async (req,res)=>{
    //UpdateOne
    try{
        const data = await mongo.db
        .collection("batch")
        .findOneAndUpdate({_id: ObjectId(req.params.id) }, { $set: {...req.body}} , {ReturnDocument:"after"} ) ;
        res.json({ status:"success", data });
    } catch (err){
       res.json({ status:"error" , error:"cannot udate batch Data" });
    }
});

route.delete("/:id", (req,res)=>{
    //DeleteOne
});

export default route;
