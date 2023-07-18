"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const planSchema = new mongoose_1.default.Schema({
    username: { type: String, required: true },
    des: { type: String, required: true },
    plan: { type: {}, required: true },
    schedule: { type: String, required: true },
    baggageList: { type: [], required: true },
});
const Plan = mongoose_1.default.model("Plan", planSchema);
exports.default = Plan;
