import express from "express";
import {
  getJoin,
  postJoin,
  getLogin,
  postLogin,
  postCheckUsername,
} from "../controllers/userController";
import {
  getMyPlan,
  getSave,
  postMyPlan,
  postSave,
} from "../controllers/planController";
import { postReview } from "../controllers/reviewControlloer";

const rootRouter = express.Router();

rootRouter.get("/", (req, res) => {
  res.send("1111");
});
rootRouter.route("/checkUsername").post(postCheckUsername);
rootRouter.route("/join").get(getJoin).post(postJoin);
rootRouter.route("/login").get(getLogin).post(postLogin);
rootRouter.route("/save/:username").get(getSave).post(postSave);
rootRouter.route("/save/:username/:id").get(getMyPlan).post(postMyPlan);
rootRouter.route("/review/:id").post(postReview);

export default rootRouter;
