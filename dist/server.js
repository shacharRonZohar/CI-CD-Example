"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.doSomething = void 0;
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
function doSomething(num1, num2) {
    return num1 + num2;
}
exports.doSomething = doSomething;
app.get('/', (req, res) => {
    const result = doSomething(1, 2);
    res.send(result);
});
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
