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
exports.postLogin = exports.getLogin = exports.postJoin = exports.getJoin = exports.postCheckUsername = void 0;
const User_1 = __importDefault(require("../models/User"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const postCheckUsername = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { username } = req.body;
    const exists = yield User_1.default.exists({ username });
    if (exists) {
        return res.status(400).send({ status: 400 });
    }
    else {
        return res.status(200).send({ status: 200 });
    }
});
exports.postCheckUsername = postCheckUsername;
const getJoin = (req, res) => {
    res.send("join");
};
exports.getJoin = getJoin;
const postJoin = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, username, password, email } = req.body;
    const exists = yield User_1.default.exists({ email });
    if (exists) {
        return res.status(400).send({ status: 400, errorMessage: "This username/email is already taken" });
    }
    try {
        yield User_1.default.create({
            name,
            username,
            password,
            email,
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
exports.postJoin = postJoin;
const getLogin = (req, res) => res.send("Login");
exports.getLogin = getLogin;
const postLogin = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { username, password } = req.body;
    const user = yield User_1.default.findOne({ username });
    if (!user) {
        return res.status(400).send({ status: 400, errorMessage: "An account with this username does not exists." });
    }
    const ok = yield bcrypt_1.default.compare(password, user.password);
    if (!ok) {
        return res.status(400).send({ status: 400, errorMessage: "An account with this username does not exists."
        });
    }
    else {
        req.session.save(function () {
            req.session.loggedIn = true;
            req.session.user = user;
        });
    }
});
exports.postLogin = postLogin;
