"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//1 - importação de arquivo
//se é js pode omitir o ,js de greet
const greet_1 = __importDefault(require("./greet"));
(0, greet_1.default)();
//2 - import de variavel
const variable_1 = require("./variable");
console.log(variable_1.x);
//3 - multiplas importações
const multiples_1 = require("./multiples");
console.log(multiples_1.c, multiples_1.b);
(0, multiples_1.Mult)();
