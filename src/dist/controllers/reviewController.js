"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getReview = exports.postReview = void 0;
const Review_1 = __importDefault(require("../models/Review"));
const postReview = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { content } = req.body;
    const { id } = req.params;
    const exists = yield Review_1.default.exists({ id });
    if (exists) {
        yield Review_1.default.updateOne({ id }, { $set: { content } });
        return res.status(200).send({ status: 200 });
    }
    else {
        try {
            yield Review_1.default.create({ id, content });
            return res.status(200).send({ status: 200 });
        }
        catch (error) {
            return res.status(404).send({
                status: 404,
                errorMessage: error._message,
            });
        }
    }
});
exports.postReview = postReview;
const getReview = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const review = yield Review_1.default.findOne({ id: id });
    try {
        return res.status(200).send({ status: 200, review });
    }
    catch (error) {
        return res.status(404).send({
            status: 404,
            errorMessage: error._message,
        });
    }
});
exports.getReview = getReview;
