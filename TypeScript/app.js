"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const util_1 = require("./util");
const util_2 = __importDefault(require("./util"));
const results = (0, util_1.add)(1, 2);
console.log(results);
console.log((0, util_2.default)());
