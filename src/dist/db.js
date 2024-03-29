"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
mongoose_1.default.connect(`${process.env.DB_URL}`);
const db = mongoose_1.default.connection;
const handleOpen = () => console.log("✅Connected DB");
const handleError = () => console.log("❌DB Error");
db.on("error", handleError);
db.once("open", handleOpen);
