"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const userController_1 = require("../controllers/userController");
const reviewController_1 = require("../controllers/reviewController");
const planController_1 = require("../controllers/planController");
const rootRouter = express_1.default.Router();
rootRouter.route("/checkUsername").post(userController_1.postCheckUsername);
rootRouter.route("/join").get(userController_1.getJoin).post(userController_1.postJoin);
rootRouter.route("/login").get(userController_1.getLogin).post(userController_1.postLogin);
rootRouter.route("/save/:username").get(planController_1.getSave).post(planController_1.postSave);
rootRouter.route("/save/:username/:id").get(planController_1.getMyPlan).post(planController_1.postMyPlan);
rootRouter.route("/saveEdit/:username/:id").post(planController_1.postEdit);
rootRouter.route("/review/:id").get(reviewController_1.getReview).post(reviewController_1.postReview);
rootRouter.route("/deletePlan/:username/:id").post(planController_1.deleteMyPlan);
exports.default = rootRouter;
