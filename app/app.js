import express from "express";
import message from "./config/message"
const app = express();

app.listen('3000', ()=>{
    //console.log("hola mundo");
    message("Hola mundo", "danger")
});