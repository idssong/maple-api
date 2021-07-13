import express from "express";
import app from "../index";

//import * as job from "../routes/jobsRouter";
//import * as field from "../routes/fieldsRouter";
const job = require('../routes/jobsRouter');
const field = require('../routes/fieldsRouter');

app.get("/", (req:express.Request, res:express.Response)=>{
    res.send("hi!");
});

app.use('/job', job);
app.use('/field', field);

app.listen(3000, ()=>console.log("Server is running in port 3000"));