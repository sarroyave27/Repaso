import { Router } from "express";
import * as controller from "../controller/user.controller"

const route = Router();

route.get("/", (req,res)=>{
    res.send(`<h1>Hola Mundo </h1>`);
});

route.get("/user",controller.findAllUser);
route.get("/user/:id",controller.findUser);

export default route;
