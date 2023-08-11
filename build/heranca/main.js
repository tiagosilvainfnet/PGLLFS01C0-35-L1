"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Cachorro_1 = __importDefault(require("./Cachorro"));
const cachorro = new Cachorro_1.default("Rex");
cachorro.latir();
cachorro.mover(10);
cachorro.dormir();
cachorro.respirar();
