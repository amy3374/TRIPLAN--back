import express from "express";
import {
  getJoin,
  postJoin,
  getLogin,
  postLogin,
  postCheckUsername,
} from "../controllers/userController";

import { getReview, postReview } from "../controllers/reviewController";
import {  deleteMyPlan, getMyPlan, getSave,  postEdit,  postMyPlan,  postSave } from "../controllers/planController";
import { generatePlanFromDescriptionAndSchedule } from "../controllers/chatGptApiControoller";

const rootRouter = express.Router();

rootRouter.route("/checkUsername").post(postCheckUsername);
rootRouter.route("/join").get(getJoin).post(postJoin);
rootRouter.route("/login").get(getLogin).post(postLogin);
rootRouter.route("/save/:username").get(getSave).post(postSave);
rootRouter.route("/save/:username/:id").get(getMyPlan).post(postMyPlan)
rootRouter.route("/saveEdit/:username/:id").post(postEdit)
rootRouter.route("/review/:id").get(getReview).post(postReview);
rootRouter.route("/deletePlan/:username/:id").post(deleteMyPlan);
rootRouter.route("/chatGptData").post(generatePlanFromDescriptionAndSchedule);


export default rootRouter;
