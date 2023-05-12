import express from "express";
import message from "./config/message"
import environment from "./config/enviroment";
import allRoutes from "./routes/user.routes";
import prodroutes from "./routes/product.routes"
import catroutes from "./routes/category.routes"

const app = express();
app.set("PORT",process.env.PORT || 3000);

app.use(express.json());

app.use("/api", allRoutes);

app.use("/api", prodroutes);

app.use("/api", catroutes);


export default app;