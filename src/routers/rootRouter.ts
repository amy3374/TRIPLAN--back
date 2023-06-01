import express from "express";
import { getJoin, postJoin, getLogin,postLogin, postCheckUsername} from "../controllers/userController";
import { getSave,postSave } from "../controllers/planController";

const rootRouter = express.Router();

rootRouter.get("/",(req,res)=>{res.send("1111")});
rootRouter.route("/checkUsername").post(postCheckUsername)
rootRouter.route("/join").get(getJoin).post(postJoin);
rootRouter.route("/login").get(getLogin).post(postLogin)
rootRouter.route("/save/:id").get(getSave).post(postSave)

export default rootRouter


