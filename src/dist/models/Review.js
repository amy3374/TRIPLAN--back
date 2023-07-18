"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const reviewSchema = new mongoose_1.default.Schema({
    id: { type: String, required: true, unique: true },
    content: { type: String, required: true },
});
const Review = mongoose_1.default.model("Review", reviewSchema);
exports.default = Review;
