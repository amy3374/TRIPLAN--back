import express from "express";
import { join } from "../controllers/userController";

const rootRouter = express.Router();

rootRouter.get("/",(req,res)=>{res.send("1111")});
rootRouter.get("/login",join);

export default rootRouter


