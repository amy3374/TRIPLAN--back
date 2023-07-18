"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
require("./db");
require("./models/User");
const server_1 = __importDefault(require("./server"));
const PORT = 8000;
const handleListening = () => {
    console.log(`http://localhost:${PORT}`);
};
server_1.default.listen(PORT, handleListening);
