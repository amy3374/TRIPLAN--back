import express from "express";
import { getJoin, postJoin, login, postCheckUsername} from "../controllers/userController";

const rootRouter = express.Router();

// rootRouter.get("/",(req,res)=>{res.send("1111")});
rootRouter.route("/checkUsername").post(postCheckUsername)
rootRouter.route("/join").get(getJoin).post(postJoin);
rootRouter.get("/login",login)

export default rootRouter


