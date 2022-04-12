"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var dotenv_1 = __importDefault(require("dotenv"));
var path = process.env.NODE_ENV === 'test' ? '.env.test' : process.env.NODE_ENV === 'dev' ? '.env.dev' : '.env';
dotenv_1["default"].config({ path: path });
