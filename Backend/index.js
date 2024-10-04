import express from "express";
import mongoose from "mongoose"

const app=express();
app.use(express.json());
app.use("/",router)
 
const PORT=5000;
mongoose.connect("Link")
.then(()=>app.listen(PORT))
.then(()=>
    console.log("connected to Database And litening to PORT"))
.catch((err)=>console.log(err));