import express from "express";
import {
  getJoin,
  postJoin,
  getLogin,
  postLogin,
  postCheckUsername,
} from "../controllers/userController";

import { getReview, postReview } from "../controllers/reviewControlloer";
import {  deleteMyPlan, getEdit, getMyPlan, getSave,  postEdit,  postMyPlan,  postSave } from "../controllers/planController";

const rootRouter = express.Router();

rootRouter.get("/", (req, res) => {
  res.send("1111");
});
rootRouter.route("/checkUsername").post(postCheckUsername);
rootRouter.route("/join").get(getJoin).post(postJoin);
rootRouter.route("/login").get(getLogin).post(postLogin);
rootRouter.route("/save/:username").get(getSave).post(postSave);
rootRouter.route("/save/:username/:id").get(getMyPlan).post(postMyPlan)
rootRouter.route("/saveEdit/:username/:id").post(postEdit)
rootRouter.route("/review/:id").get(getReview).post(postReview);
rootRouter.route("/deletePlan/:username/:id").post(deleteMyPlan)


export default rootRouter;
