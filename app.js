import express from "express";
const app = express();
const Port = process.env.PORT || 10000 ;



app.listen(Port, ()=>{
    console.log("server listening on port : ", Port);
})