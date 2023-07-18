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
exports.deleteMyPlan = exports.postEdit = exports.getEdit = exports.postMyPlan = exports.getMyPlan = exports.postSave = exports.getSave = void 0;
const Plan_1 = __importDefault(require("../models/Plan"));
const getSave = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const username = req.params.username;
    const plan = yield Plan_1.default.find({ username });
    return res.status(200).send({ status: 200, planData: plan });
});
exports.getSave = getSave;
const postSave = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { username, des, plan, schedule, baggageList } = req.body;
    try {
        yield Plan_1.default.create({
            username,
            des,
            plan,
            schedule,
            baggageList,
        });
        return res.status(200).send({ status: 200 });
    }
    catch (error) {
        return res.status(404).send({
            status: 404,
            errorMessage: error._message,
        });
    }
});
exports.postSave = postSave;
const getMyPlan = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const planDetail = yield Plan_1.default.findOne({ _id: id });
    return res.status(200).send({ status: 200, planDetail });
});
exports.getMyPlan = getMyPlan;
const postMyPlan = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { username, des, plan, schedule, baggageList } = req.body;
    try {
        yield Plan_1.default.create({
            username,
            des,
            plan,
            schedule,
            baggageList,
        });
        return res.status(200).send({ status: 200 });
    }
    catch (error) {
        return res.status(404).send({
            status: 404,
            errorMessage: error._message,
        });
    }
});
exports.postMyPlan = postMyPlan;
const getEdit = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const editedPlan = yield Plan_1.default.findById(id);
    if (!editedPlan) {
        return res.status(404).send({
            status: 404,
            errorMessage: "not founded",
        });
    }
    return res.status(200).send({ status: 200 });
});
exports.getEdit = getEdit;
const postEdit = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const { plan, baggageList } = req.body;
    const edit = yield Plan_1.default.exists({ _id: id });
    if (!edit) {
        return res.status(404).send({
            status: 404,
            errorMessage: "POST ERROR",
        });
    }
    yield Plan_1.default.findByIdAndUpdate({ _id: id }, {
        plan,
        baggageList,
    });
    return res.status(200).send({ status: 200 });
});
exports.postEdit = postEdit;
const deleteMyPlan = (req, res, error) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    try {
        yield Plan_1.default.deleteOne({ _id: id });
        return res.status(200).send({ status: 200 });
    }
    catch (error) {
        return res.status(404).send({
            status: 404,
            errorMessage: error._message,
        });
    }
});
exports.deleteMyPlan = deleteMyPlan;
