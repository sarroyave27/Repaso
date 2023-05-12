import { Router } from "express";
import * as controller from "../controller/category.controller"

const route = Router();

route.get("/", (req,res)=>{
    res.send(`<h1>Hola Mundo </h1>`);
});

route.get("/category",controller.findAllCategory);
route.get("/category/:id",controller.findCategory);
route.post("/category/",controller.insertCategory);
route.put("/category",controller.updateCategory);
route.delete("/category/:id", controller.deleteCategory);

export default route;
