"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const service_js_1 = require("./service.js");
const app = (0, express_1.default)();
app.get('/', (req, res) => {
    const result = (0, service_js_1.doSomething)(1, 2);
    res.send(result);
});
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
