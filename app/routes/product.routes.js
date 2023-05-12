import { Router } from "express";
import * as controller from "../controller/product.controller"

const route = Router();

route.get("/", (req,res)=>{
    res.send(`<h1>Hola Mundo </h1>`);
});

route.get("/product",controller.findAllProduct);
route.get("/product/:id",controller.findProduct);
route.post("/product/",controller.insertProduct);
route.put("/product",controller.updateProduct);
route.delete("/product/:id", controller.deleteProduct);

export default route;
